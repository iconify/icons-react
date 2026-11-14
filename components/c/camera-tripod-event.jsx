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
		"content": `<style>.mmie8wb2r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 4h11v7h-11Zm11 2.25l5-2v6.5l-5-2M9 11L4.5 21M9 11v10m0-10l4.5 10M7 7.5h.01");
}
</style><path class="mmie8wb2r"/>`,
		"fallback": "uix-sharp:camera-tripod-event",
	});
}

export default Component;
