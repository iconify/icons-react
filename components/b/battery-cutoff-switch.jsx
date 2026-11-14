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

.s2w3bbcmn {
  d: path("M9 14a1.75 1.75 0 1 0 3.5 0A1.75 1.75 0 1 0 9 14m2.75-1.5l3.5-8");
}

.tejq_kb1x {
  d: path("M6.875 9h7.75A4.375 4.375 0 0 1 19 13.375v1.25A4.375 4.375 0 0 1 14.625 19h-7.75A4.375 4.375 0 0 1 2.5 14.625v-1.25A4.375 4.375 0 0 1 6.875 9M21.5 12.5v3");
}
</style><g class="hntgybcog"><path class="tejq_kb1x"/><path class="s2w3bbcmn"/></g>`,
		"fallback": "uix:battery-cutoff-switch",
	});
}

export default Component;
