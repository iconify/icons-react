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
		"content": `<style>.dbyb52b2u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 10.25a3 3 0 1 1 4 0A3 3 0 1 1 14.25 14A3 3 0 1 1 11 16.5A3 3 0 1 1 7.75 14A3 3 0 1 1 9 10.25ZM11 13l8-8m0 0h.01");
}
</style><path class="dbyb52b2u"/>`,
		"fallback": "uix-sharp:hibiscus",
	});
}

export default Component;
