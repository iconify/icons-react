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
		"content": `<style>.ci7h_2bxp {
  d: path("M8 5h11a2.5 2.5 0 0 1 2.5 2.5v9A2.5 2.5 0 0 1 19 19H8l-5.5-7Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tr2mmnbmp {
  d: path("M13.5 8q.5 3.5 4 4q-3.5.5-4 4q-.5-3.5-4-4q3.5-.5 4-4");
}
</style><g class="hntgybcog"><path class="ci7h_2bxp"/><path class="tr2mmnbmp"/></g>`,
		"fallback": "uix:ai-label",
	});
}

export default Component;
