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
		"content": `<style>.g3o26fvyi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17.75 11C15.5 9.5 14 8 14 5.75c0-1.5 1-2.5 2.25-2.5c.75 0 1.25.35 1.5 1c.25-.65.75-1 1.5-1c1.25 0 2.25 1 2.25 2.5C21.5 8 20 9.5 17.75 11Zm-15 8a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm3.5 0C13 19 9 13 15.5 13");
}
</style><path class="g3o26fvyi"/>`,
		"fallback": "uix-sharp:donor-journey",
	});
}

export default Component;
