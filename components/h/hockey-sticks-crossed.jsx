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

.u1g90la5o {
  d: path("M6 3.5L16 19q1 1.5 3 1.5h2");
}

.xziko6bwu {
  d: path("M18 3.5L8 19q-1 1.5-3 1.5H3");
}
</style><g class="hntgybcog"><path class="xziko6bwu"/><path class="u1g90la5o"/></g>`,
		"fallback": "uix:hockey-sticks-crossed",
	});
}

export default Component;
