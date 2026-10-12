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
		"content": `<style>.aqmj_4big {
  width: 18.5px;
  height: 18.5px;
  x: 2.75px;
  y: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 3px;
}

.dxb4-y27h {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 6.25h8a1 1 0 0 1 1 1v8.25H7V7.25a1 1 0 0 1 1-1M7 11h10m-8.5 4.5v2.25m7-2.25v2.25");
}

.pe3q713sr {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 13.25h.01m5.99 0h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="aqmj_4big"/><path class="dxb4-y27h"/><path class="pe3q713sr"/></g>`,
		"fallback": "iconoven:bus-stop-sign",
	});
}

export default Component;
