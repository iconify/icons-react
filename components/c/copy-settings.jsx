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

.qr816xbma {
  d: path("M6.5 7H13a3.5 3.5 0 0 1 3.5 3.5V18a3.5 3.5 0 0 1-3.5 3.5H6.5A3.5 3.5 0 0 1 3 18v-7.5A3.5 3.5 0 0 1 6.5 7");
}

.x0ptcybrw {
  d: path("M7.5 7V4.5a2 2 0 0 1 2-2H19a2 2 0 0 1 2 2V15a2 2 0 0 1-2 2h-2.5M6 11.5h7.5M6 17h7.5M7 11.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m3 5.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}
</style><g class="hntgybcog"><path class="qr816xbma"/><path class="x0ptcybrw"/></g>`,
		"fallback": "uix:copy-settings",
	});
}

export default Component;
