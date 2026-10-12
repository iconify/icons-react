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

.lsrx3cb0x {
  width: 12.5px;
  height: 12.75px;
  x: 3.75px;
  y: 8.5px;
  rx: 3px;
}

.w47cr_afy {
  d: path("M3.75 12.75h12.5M10 8.5v-2C10 4.25 11.5 3 13.25 3C15.5 3 16 5.5 18 5.5c1.25 0 2-.5 2.5-1.25");
}
</style><g class="hntgybcog"><rect class="lsrx3cb0x"/><path class="w47cr_afy"/></g>`,
		"fallback": "iconoven:dental-floss",
	});
}

export default Component;
