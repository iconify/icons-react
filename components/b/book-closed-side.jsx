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
		"content": `<style>.lw_fv4jah {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M21 6H6.5A3.5 3.5 0 0 0 3 9.5v5A3.5 3.5 0 0 0 6.5 18H21M8 10h13M8 14h13");
}
</style><path class="lw_fv4jah"/>`,
		"fallback": "uix-sharp:book-closed-side",
	});
}

export default Component;
