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
		"content": `<style>.aefx35bpu {
  d: path("M3.5 16.5L8 12l4 2l4-7l4.5 3m-11-5.5H11m1.25 0h1.5m1.25 0h1.5M9.5 18H11m1.25 0h1.5M15 18h1.5m-7-12v1.5m0 7.5v1.5m7-10.5v1.5m0 7.5v1.5");
}

.op-evrbgg {
  fill: currentColor;
  d: path("M8.75 9.75h1.5v3.5h-1.5Zm7 0h1.5v3.5h-1.5Z");
}

.p8u760b4u {
  d: path("M3.5 3v17.5H21");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="p8u760b4u"/><path class="aefx35bpu"/><path class="op-evrbgg"/></g>`,
		"fallback": "uix-sharp:chart-brush",
	});
}

export default Component;
