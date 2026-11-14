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

.lozsuzbwh {
  d: path("M5.603 11.75a4.5 4.5 0 1 1 7.794 0M9.5 9.5l-3.25 3.25M9.5 9.5h.01m8.49 5v7m-3-3l3 3l3-3");
}

.r5659k6od {
  d: path("M2.5 9.5a7 7 0 1 0 14 0a7 7 0 1 0-14 0");
}
</style><g class="hntgybcog"><path class="r5659k6od"/><path class="lozsuzbwh"/></g>`,
		"fallback": "uix:blood-pressure-low",
	});
}

export default Component;
