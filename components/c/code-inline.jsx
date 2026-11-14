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

.hp_udv2wl {
  d: path("M8.25 9.25L5.5 12l2.75 2.75m7.5-5.5L18.5 12l-2.75 2.75M13 9.25l-2 5.5");
}

.lfo47pb3c {
  d: path("M6.875 6.5h10.25a4.375 4.375 0 0 1 4.375 4.375v2.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 13.125v-2.25A4.375 4.375 0 0 1 6.875 6.5");
}
</style><g class="hntgybcog"><path class="lfo47pb3c"/><path class="hp_udv2wl"/></g>`,
		"fallback": "uix:code-inline",
	});
}

export default Component;
