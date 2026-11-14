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
		"content": `<style>.bgpy8kb7m {
  fill: currentColor;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 11h6.5v2h-6.5Zm9.5 1a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm5.5 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}
</style><path class="bgpy8kb7m"/>`,
		"fallback": "uix-sharp:carousel-dots",
	});
}

export default Component;
