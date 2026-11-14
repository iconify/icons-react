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
		"content": `<style>.yd2lzob3u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h3l3 1.5l-3 1.5h-3v-3m0 5.25h7l3 1.5l-3 1.5h-7v-3m0 5.25h11l3 1.5l-3 1.5h-11v-3m0 5.25h15l3 1.5l-3 1.5h-15v-3");
}
</style><path class="yd2lzob3u"/>`,
		"fallback": "uix-sharp:energy-rating",
	});
}

export default Component;
