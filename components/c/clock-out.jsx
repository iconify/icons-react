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

.r8a9qcmsq {
  d: path("M11.154 17.971a7.5 7.5 0 1 1 6.817-6.817");
}

.xyyr0ebkn {
  d: path("M10.5 6.5v4h3M18 21v-6m-2.5 2.5L18 15l2.5 2.5");
}
</style><g class="hntgybcog"><path class="r8a9qcmsq"/><path class="xyyr0ebkn"/></g>`,
		"fallback": "uix:clock-out",
	});
}

export default Component;
