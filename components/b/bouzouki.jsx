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

.iv9sjbs3p {
  d: path("M9.75 16a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}

.t8q1d3irr {
  d: path("M10.5 10c-4.5 1-5.5 5-5 7.5c.5 3 3.5 4 6.5 4s6-1 6.5-4c.5-2.5-.5-6.5-5-7.5m-3 0V6.5L8.25 3l2.25-.75l3 4.25V10");
}
</style><g class="hntgybcog"><path class="t8q1d3irr"/><path class="iv9sjbs3p"/></g>`,
		"fallback": "uix:bouzouki",
	});
}

export default Component;
