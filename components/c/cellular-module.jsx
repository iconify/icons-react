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
		"content": `<style>.ybcdo2n1o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 5h10v10H5Zm3-2.5V5m4-2.5V5M2.5 8H5m-2.5 4H5m3 3v2.5m4-2.5v2.5M15 8h2.5M15 12h2.5m-2 9v-2.5m3 2.5v-4.5m3 4.5v-6.5");
}
</style><path class="ybcdo2n1o"/>`,
		"fallback": "uix-sharp:cellular-module",
	});
}

export default Component;
