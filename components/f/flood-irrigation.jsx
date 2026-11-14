import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s1ub-4_re {
  d: path("M9.5 8.5q2.25-1.25 4.5 0t4.5 0m-9 3.5q2.25-1.25 4.5 0t4.5 0m-9 3.5q2.25-1.25 4.5 0t4.5 0");
}

.shx7jdbnu {
  d: path("M2.5 7.5h4v-1a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2V11h-4");
}
</style><g class="hntgybcog"><path class="shx7jdbnu"/><path class="s1ub-4_re"/></g>`,
		"fallback": "uix:flood-irrigation",
	});
}

export default Component;
