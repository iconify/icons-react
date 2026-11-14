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
		"content": `<style>.m3azqxp8d {
  d: path("M10.5 8.5h3v7h-3Zm-4 0v7m11-7v7");
}

.thsafob9h {
  d: path("M8 6h8v12H8Zm-5 6h3.5m11 0H21");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="thsafob9h"/><path class="m3azqxp8d"/></g>`,
		"fallback": "uix-sharp:crystal-oscillator",
	});
}

export default Component;
