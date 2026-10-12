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
		"content": `<style>.qpnu2ixfr {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.5 17.5h.01m4.99 0h.01M9.5 10.25h.01m4.99 0h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.waead6b3w {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 14.7V6.25h12v8.45M6 9.25H3.75l-1.219.022l.569 1.078L4 12h2Zm12 0h2.25l1.219.022l-.569 1.078L20 12h-2Zm-9.75-3l-3.111-.778L4.75 2.75m11 3.5l3.111-.778l.389-2.722");
}

.x7vn00bkl {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 13.5h14v7.75H5z");
}
</style><g class="ux2u0rbkq"><path class="waead6b3w"/><path class="x7vn00bkl"/><path class="qpnu2ixfr"/></g>`,
		"fallback": "iconoven:cow-sharp",
	});
}

export default Component;
