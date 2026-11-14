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
		"content": `<style>.hd-4zbcml {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 11.75h8.5a2.5 2.5 0 0 0 0-5a4.25 4.25 0 0 0-8.5 0a2.5 2.5 0 0 0 0 5ZM12 14.5v7m-3.75-3.75L12 21.5l3.75-3.75");
}
</style><path class="hd-4zbcml"/>`,
		"fallback": "uix-sharp:downdraft",
	});
}

export default Component;
