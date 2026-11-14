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
		"content": `<style>.d0x70ib1c {
  d: path("M6.5 17.5V10c0-4 2.5-6.5 6-6.5s6 2 6 4.5m0 0l3 5h-6Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zf8finboi {
  d: path("M3 21a3.5 3.5 0 0 1 7 0Z");
}
</style><g class="hntgybcog"><path class="zf8finboi"/><path class="d0x70ib1c"/></g>`,
		"fallback": "uix:arc-lamp",
	});
}

export default Component;
