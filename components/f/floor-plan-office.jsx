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
		"content": `<style>.dsjs6ccfs {
  d: path("M9 21.5h12.5v-19h-19v19H5m4.5-19V10m-7 0H15m3 0h3.5");
}

.ew-wc3b5k {
  d: path("M14.5 14h2a1.5 1.5 0 0 1 1.5 1.5v.5a1.5 1.5 0 0 1-1.5 1.5h-2A1.5 1.5 0 0 1 13 16v-.5a1.5 1.5 0 0 1 1.5-1.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="dsjs6ccfs"/><path class="ew-wc3b5k"/></g>`,
		"fallback": "uix:floor-plan-office",
	});
}

export default Component;
