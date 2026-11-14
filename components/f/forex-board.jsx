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
		"content": `<style>.h_a6efzmd {
  d: path("m15 8.5l1.75-1.75L18.5 8.5M6 12h5.5m3.5-1l1.75 1.75L18.5 11M6 16.5h5.5m3.5 1l1.75-1.75l1.75 1.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vbpcnob5m {
  d: path("M6 3h12a3.5 3.5 0 0 1 3.5 3.5v11A3.5 3.5 0 0 1 18 21H6a3.5 3.5 0 0 1-3.5-3.5v-11A3.5 3.5 0 0 1 6 3m0 4.5h5.5");
}
</style><g class="hntgybcog"><path class="vbpcnob5m"/><path class="h_a6efzmd"/></g>`,
		"fallback": "uix:forex-board",
	});
}

export default Component;
