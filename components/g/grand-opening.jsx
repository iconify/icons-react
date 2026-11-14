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
		"content": `<style>.co4q2eb8m {
  d: path("M8 20.5v-6h4v2.8m2 2.45a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m2.25-1.25l4-4.5M19 19.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m.75-1.25l-4-4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.naarch-bu {
  d: path("M3 6.5L4.5 3h15L21 6.5m-18 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0M4.5 9v11.5h6.8m8.2-9.2V9");
}
</style><g class="hntgybcog"><path class="naarch-bu"/><path class="co4q2eb8m"/></g>`,
		"fallback": "uix:grand-opening",
	});
}

export default Component;
