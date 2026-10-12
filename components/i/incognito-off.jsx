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

.j3us12bbb {
  d: path("M10.25 16.5c1.1-.6 2.4-.6 3.5 0");
}

.kfwa6xbwu {
  cx: 7.5px;
  cy: 17px;
  r: 2.75px;
}

.pvu_2ybiu {
  d: path("m5.5 11.25l1.6-5.6a1.5 1.5 0 0 1 1.95-1L12 5.5l2.95-.85a1.5 1.5 0 0 1 1.95 1l1.6 5.6Zm-2.75 0h18.5");
}

.vbab6sb8q {
  cx: 16.5px;
  cy: 17px;
  r: 2.75px;
}
</style><g class="hntgybcog"><path class="pvu_2ybiu"/><circle class="kfwa6xbwu"/><circle class="vbab6sb8q"/><path class="j3us12bbb"/></g>`,
		"fallback": "iconoven:incognito-off",
	});
}

export default Component;
