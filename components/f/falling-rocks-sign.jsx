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

.pp1grubkg {
  fill: currentColor;
  d: path("M11 11a1 1 0 1 0 2 0a1 1 0 1 0-2 0m1.75 4.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.sbynuxbok {
  d: path("m14.291 7.101l5.026 8.993A2.625 2.625 0 0 1 17.026 20H6.974a2.625 2.625 0 0 1-2.291-3.906l5.026-8.993a2.625 2.625 0 0 1 4.582 0M6.25 13.25L12.5 20");
}
</style><g class="hntgybcog"><path class="sbynuxbok"/><path class="pp1grubkg"/></g>`,
		"fallback": "uix:falling-rocks-sign",
	});
}

export default Component;
