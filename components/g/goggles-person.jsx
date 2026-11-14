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
		"content": `<style>.a9sxq8b7z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 5h13v6h-13ZM8 5a5 5 0 0 1 8 0m-8 6a5 5 0 0 0 8 0M4.5 21.5c0-3 3.25-5.5 7.5-5.5s7.5 2.5 7.5 5.5");
}
</style><path class="a9sxq8b7z"/>`,
		"fallback": "uix-sharp:goggles-person",
	});
}

export default Component;
