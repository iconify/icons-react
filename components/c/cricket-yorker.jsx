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
		"content": `<style>.az8c50bmh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 21V6.25M8.5 21V6.25m4 14.75V6.25m-9-2.75h10m1.75 14.75a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}
</style><path class="az8c50bmh"/>`,
		"fallback": "uix-sharp:cricket-yorker",
	});
}

export default Component;
