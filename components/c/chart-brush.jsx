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
		"content": `<style>.aefx35bpu {
  d: path("M3.5 16.5L8 12l4 2l4-7l4.5 3m-11-5.5H11m1.25 0h1.5m1.25 0h1.5M9.5 18H11m1.25 0h1.5M15 18h1.5m-7-12v1.5m0 7.5v1.5m7-10.5v1.5m0 7.5v1.5");
}

.ak0uv-brb {
  fill: currentColor;
  d: path("M9.5 9.75za.75.75 0 0 1 .75.75v2a.75.75 0 0 1-.75.75a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 .75-.75m7 0za.75.75 0 0 1 .75.75v2a.75.75 0 0 1-.75.75a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 .75-.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p8u760b4u {
  d: path("M3.5 3v17.5H21");
}
</style><g class="hntgybcog"><path class="p8u760b4u"/><path class="aefx35bpu"/><path class="ak0uv-brb"/></g>`,
		"fallback": "uix:chart-brush",
	});
}

export default Component;
