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
		"content": `<style>.nujxmdb1q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 8V6A2.5 2.5 0 0 1 6 3.5h2m8 0h2A2.5 2.5 0 0 1 20.5 6v2m0 8v2a2.5 2.5 0 0 1-2.5 2.5h-2m-8 0H6A2.5 2.5 0 0 1 3.5 18v-2m8.5-4c-1-1.5-1.75-2-2.75-2c-1.15 0-2 .9-2 2s.85 2 2 2c1 0 1.75-.5 2.75-2s1.75-2 2.75-2c1.15 0 2 .9 2 2s-.85 2-2 2c-1 0-1.75-.5-2.75-2");
}
</style><path class="nujxmdb1q"/>`,
		"fallback": "uix-sharp:infinite-canvas",
	});
}

export default Component;
