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
		"content": `<style>.hn9vce5jr {
  d: path("M10.5 7L12 5.5L13.5 7m-3 10l1.5 1.5l1.5-1.5M7 10.5L5.5 12L7 13.5m10-3l1.5 1.5l-1.5 1.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sbn01ybdr {
  d: path("M10.625 2.5h2.75A2.625 2.625 0 0 1 16 5.125v.25A2.625 2.625 0 0 0 18.625 8h.25a2.625 2.625 0 0 1 2.625 2.625v2.75A2.625 2.625 0 0 1 18.875 16h-.25A2.625 2.625 0 0 0 16 18.625v.25a2.625 2.625 0 0 1-2.625 2.625h-2.75A2.625 2.625 0 0 1 8 18.875v-.25A2.625 2.625 0 0 0 5.375 16h-.25A2.625 2.625 0 0 1 2.5 13.375v-2.75A2.625 2.625 0 0 1 5.125 8h.25A2.625 2.625 0 0 0 8 5.375v-.25A2.625 2.625 0 0 1 10.625 2.5");
}
</style><g class="hntgybcog"><path class="sbn01ybdr"/><path class="hn9vce5jr"/></g>`,
		"fallback": "uix:dpad",
	});
}

export default Component;
