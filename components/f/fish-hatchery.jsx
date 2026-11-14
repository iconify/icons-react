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

.lwvebc47i {
  d: path("M11.5 13c1.5-3 4.25-3 5.25 0l1.5-1.75v3.5L16.75 13c-1 3-3.75 3-5.25 0");
}

.p6npeabzr {
  d: path("M3 3.5V18a2.5 2.5 0 0 0 2.5 2.5h13A2.5 2.5 0 0 0 21 18V3.5m-12.25 17V8");
}
</style><g class="hntgybcog"><path class="p6npeabzr"/><path class="lwvebc47i"/></g>`,
		"fallback": "uix:fish-hatchery",
	});
}

export default Component;
