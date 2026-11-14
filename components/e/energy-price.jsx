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
		"content": `<style>.h5ffsbcbr {
  d: path("M8.5 4.5h11v15h-11l-5-7.5ZM8.25 12h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xtx-z5byf {
  d: path("M15.5 7.5L12 12h4l-3.5 4.5");
}
</style><g class="ulnmmdpxh"><path class="h5ffsbcbr"/><path class="xtx-z5byf"/></g>`,
		"fallback": "uix-sharp:energy-price",
	});
}

export default Component;
