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
		"content": `<style>.cbvm2pb5h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 10c3.5-8 12-8 15.5 0c-3.5 8-12 8-15.5 0Zm7.75 0h.01m8.99 4.5L16 18.75h2.75L17.5 22l4-4.75h-2.75Z");
}
</style><path class="cbvm2pb5h"/>`,
		"fallback": "uix-sharp:flash-red-eye",
	});
}

export default Component;
