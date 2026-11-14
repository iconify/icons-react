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

.laf7882hv {
  d: path("M10.5 11q1.5-1.5 3 0");
}

.uqhdvp8_a {
  fill: currentColor;
  d: path("M6.5 8za4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m11 0za4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4");
}
</style><g class="hntgybcog"><path class="uqhdvp8_a"/><path class="laf7882hv"/></g>`,
		"fallback": "uix:eclipse-glasses",
	});
}

export default Component;
