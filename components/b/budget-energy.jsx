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

.hrqunj3_f {
  d: path("m13 10l-2.5 4.25h3L11 18.5");
}

.yz_2k2d_s {
  d: path("M4.25 18.5a9 9 0 1 1 15.5 0m-3.5-8.75l2-2");
}
</style><g class="hntgybcog"><path class="yz_2k2d_s"/><path class="hrqunj3_f"/></g>`,
		"fallback": "uix:budget-energy",
	});
}

export default Component;
