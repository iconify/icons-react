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
		"content": `<style>.vsf7xbcfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 3v18.5m0-17q3.5-2 7-1t6.5-1v9q-3 2-6.5 1t-7 1");
}
</style><path class="vsf7xbcfd"/>`,
		"fallback": "uix-sharp:blue-flag-lapping",
	});
}

export default Component;
