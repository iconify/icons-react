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
		"content": `<style>.pyxiyvbvb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.5 16.5a3 3 0 0 1 0-6a4 4 0 0 1 7 1.5a2.5 2.5 0 0 1-1.5 4.5ZM2.5 9h7m-7 4h5M4 17h5.5");
}
</style><path class="pyxiyvbvb"/>`,
		"fallback": "uix-sharp:cloud-wind",
	});
}

export default Component;
