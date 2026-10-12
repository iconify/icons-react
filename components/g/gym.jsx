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

.tgc5nacvv {
  d: path("M10.5 11.25L9.25 15m4.25-3.75L14.75 15m-8 0h10.5M3.5 12.75H4q.75 0 .75-.75v-.25q0-.75.75-.75H6q.75 0 .75.75v6.5q0 .75-.75.75h-.5q-.75 0-.75-.75V18q0-.75-.75-.75h-.5q-.75 0-.75-.75v-3q0-.75.75-.75m17 0H20q-.75 0-.75-.75v-.25q0-.75-.75-.75H18q-.75 0-.75.75v6.5q0 .75.75.75h.5q.75 0 .75-.75V18q0-.75.75-.75h.5q.75 0 .75-.75v-3q0-.75-.75-.75");
}

.vwv921b0x {
  cx: 12px;
  cy: 6.75px;
  r: 2px;
}
</style><g class="hntgybcog"><circle class="vwv921b0x"/><path class="tgc5nacvv"/></g>`,
		"fallback": "iconoven:gym",
	});
}

export default Component;
