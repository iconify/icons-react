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
		"content": `<style>.lqs9esbfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 10.5v1l-3 2.5v5A2.5 2.5 0 0 0 9 21.5h6a2.5 2.5 0 0 0 2.5-2.5v-5l-3-2.5v-1m-7-2.75h9l-1 2.75h-7ZM10 5c-1-1 1-1.5 0-2.5M14 5c-1-1 1-1.5 0-2.5");
}
</style><path class="lqs9esbfx"/>`,
		"fallback": "uix-sharp:insulated-flask",
	});
}

export default Component;
