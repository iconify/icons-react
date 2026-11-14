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

.lx83bp9ev {
  d: path("M6.25 10.25zA.75.75 0 0 1 7 11a.75.75 0 0 1-.75.75a.75.75 0 0 1-.75-.75a.75.75 0 0 1 .75-.75m3.75 0za.75.75 0 0 1 .75.75a.75.75 0 0 1-.75.75a.75.75 0 0 1-.75-.75a.75.75 0 0 1 .75-.75m4 0za.75.75 0 0 1 .75.75a.75.75 0 0 1-.75.75a.75.75 0 0 1-.75-.75a.75.75 0 0 1 .75-.75m3.75 0za.75.75 0 0 1 .75.75a.75.75 0 0 1-.75.75A.75.75 0 0 1 17 11a.75.75 0 0 1 .75-.75");
}

.oep7ahb2o {
  d: path("M2.5 7h19c0 6.5-4 10.5-9.5 10.5S2.5 13.5 2.5 7m2 4h15");
}
</style><g class="hntgybcog"><path class="oep7ahb2o"/><path class="lx83bp9ev"/></g>`,
		"fallback": "uix:braces-smile",
	});
}

export default Component;
