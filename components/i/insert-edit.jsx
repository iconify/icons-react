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
		"content": `<style>.cstztubvb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 19h19M3 13.5h5.5V19H3Zm12.5 0H21V19h-5.5ZM9.25 5h5.5v5.5h-5.5Z");
}
</style><path class="cstztubvb"/>`,
		"fallback": "uix-sharp:insert-edit",
	});
}

export default Component;
