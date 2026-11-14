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
		"content": `<style>.h8-16gd0j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 3.5h15v17h-15Zm-4 6.5l19 9.5M2.5 14l19-9.5");
}
</style><path class="h8-16gd0j"/>`,
		"fallback": "uix-sharp:camera-obscura",
	});
}

export default Component;
