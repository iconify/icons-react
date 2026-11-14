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
		"content": `<style>.nfon1_biq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4 11.5l8 10l8-10m-13.5 3l8.75 3M5 6.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm9 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-6.5 2.5L9 12m7.5-2.75L15 12");
}
</style><path class="nfon1_biq"/>`,
		"fallback": "uix-sharp:bouquet-wrapped",
	});
}

export default Component;
