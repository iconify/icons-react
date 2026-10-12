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
		"content": `<style>.ovmnd6brd {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3v18M20 3v18M2.75 21h18.5M4 15h16M7 10.25v-.5q0-.75.74-.86l.27-.03q.74-.11 1.19-.71l.6-.8q.45-.6 1.2-.6h3q.75 0 1.2.6l.6.8q.45.6.83.73q.37.12.37.87v.5q0 .75-.75.75h-8.5Q7 11 7 10.25");
}

.rpxachbmq {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 13h.01");
}

.uay-wcchm {
  cx: 9px;
  cy: 13px;
  r: 2px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ugmgryb8x {
  cx: 15px;
  cy: 13px;
  r: 2px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.yngw34bnt {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 13h.01");
}
</style><g class="y9tr6bcfx"><path class="ovmnd6brd"/><circle class="uay-wcchm"/><path class="yngw34bnt"/><circle class="ugmgryb8x"/><path class="rpxachbmq"/></g>`,
		"fallback": "iconoven:car-lift",
	});
}

export default Component;
