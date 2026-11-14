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
		"content": `<style>.f8zi4tp8r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 6h6v10h-6Zm9 0h6v10h-6Zm-9 10h15l-4 3h-7Zm7.5 3v2.5M7.5 6V3m9 3V3");
}
</style><path class="f8zi4tp8r"/>`,
		"fallback": "uix-sharp:fiber-connector-lc",
	});
}

export default Component;
