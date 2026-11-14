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

.ouxn50b4s {
  d: path("M10 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm4-4v8m2-6.75v5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h5ffsbcbr"/><path class="ouxn50b4s"/></g>`,
		"fallback": "uix-sharp:half-price-label",
	});
}

export default Component;
