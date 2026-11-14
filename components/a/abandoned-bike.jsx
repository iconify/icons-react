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
		"content": `<style>.frd4wxbpv {
  d: path("M2.5 8.75a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0m9.25 0a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.udgjx2soq {
  d: path("M5.75 8.75h4.5l-2-5.25m2 5.25l3-5.25L15 8.75M8.25 3.5h5m2.183 15.792l1.245-2.324a1.5 1.5 0 0 1 2.644 0l1.245 2.324a1.5 1.5 0 0 1-1.322 2.208h-2.49a1.5 1.5 0 0 1-1.322-2.208M18 17.5v1.75");
}
</style><g class="hntgybcog"><path class="frd4wxbpv"/><path class="udgjx2soq"/></g>`,
		"fallback": "uix:abandoned-bike",
	});
}

export default Component;
