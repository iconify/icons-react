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
		"content": `<style>.pxj8rgl9z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.1 19.5H3v-17h14v8.1M6 5.5v3M6 7h8m0-1.5v3m-4 13h11.5V10Z");
}
</style><path class="pxj8rgl9z"/>`,
		"fallback": "uix-sharp:engineering-drawing",
	});
}

export default Component;
