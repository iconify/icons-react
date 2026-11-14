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
		"content": `<style>.e899xoiuv {
  d: path("M16.83 10.706a5 5 0 0 1-5.266 6.275M9.5 16.33a5 5 0 1 1 5.714-8.16");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xnszqnfru {
  d: path("M13.563 3.137a9 9 0 0 1 5.809 14.025m-2.21 2.21A9 9 0 0 1 4.206 16.5m-1.069-2.937a9 9 0 0 1 7.3-10.426");
}
</style><g class="ulnmmdpxh"><path class="xnszqnfru"/><path class="e899xoiuv"/></g>`,
		"fallback": "uix-sharp:chart-nested-donut",
	});
}

export default Component;
