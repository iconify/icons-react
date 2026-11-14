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
		"content": `<style>.j_psw1y4g {
  d: path("M3 3h18v18H3Z");
}

.m0-y0pcpn {
  d: path("m12 6.5l1.5 3.5l3.75.25l-3 2.5l1 3.75l-3.25-2l-3.25 2l1-3.75l-3-2.5L10.5 10Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j_psw1y4g"/><path class="m0-y0pcpn"/></g>`,
		"fallback": "uix-sharp:die-cutter",
	});
}

export default Component;
