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
		"content": `<style>.bcm-xab8u {
  d: path("M11.75 8.25a4.25 4.25 0 1 1 5.5 4.25m-8-3V13M16 2v1m5.5 5.5h.5m-2-4l.75-.75M20 12.5l.75.75");
}

.cttfzlbpm {
  d: path("M5.125 9.5h8.25A2.625 2.625 0 0 1 16 12.125v6.75a2.625 2.625 0 0 1-2.625 2.625h-8.25A2.625 2.625 0 0 1 2.5 18.875v-6.75A2.625 2.625 0 0 1 5.125 9.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="cttfzlbpm"/><path class="bcm-xab8u"/></g>`,
		"fallback": "uix:delivery-today",
	});
}

export default Component;
