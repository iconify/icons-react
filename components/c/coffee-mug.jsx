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
		"content": `<style>.y4y-0ui3v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 4.5H16v12a4 4 0 0 1-4 4H7.5a4 4 0 0 1-4-4Zm12.5 3h1a3.5 3.5 0 0 1 0 7h-1");
}
</style><path class="y4y-0ui3v"/>`,
		"fallback": "uix-sharp:coffee-mug",
	});
}

export default Component;
