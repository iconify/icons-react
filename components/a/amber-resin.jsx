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

.j8rsdlcct {
  d: path("M4 3h16m-8 0c-2.5 4-6 8-6 11.5a6 6 0 0 0 12 0C18 11 14.5 7 12 3");
}

.r2_oy0arb {
  d: path("M9 16q0-2.5 1.75-4");
}
</style><g class="hntgybcog"><path class="j8rsdlcct"/><path class="r2_oy0arb"/></g>`,
		"fallback": "uix:amber-resin",
	});
}

export default Component;
