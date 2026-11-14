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
		"content": `<style>.dk0hjh2db {
  d: path("M2.5 10a1.5 1.5 0 0 1 3 0v4h5v-4a1.5 1.5 0 0 1 3 0v4h5v-4a1.5 1.5 0 0 1 3 0v8h-19Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ymfg-abwj {
  d: path("M5.5 10V5.5A1.5 1.5 0 0 1 7 4h2a1.5 1.5 0 0 1 1.5 1.5V10m3 0V5.5A1.5 1.5 0 0 1 15 4h2a1.5 1.5 0 0 1 1.5 1.5V10M4 18v3m16-3v3");
}
</style><g class="hntgybcog"><path class="dk0hjh2db"/><path class="ymfg-abwj"/></g>`,
		"fallback": "uix:couple-seat",
	});
}

export default Component;
