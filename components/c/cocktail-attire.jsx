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
		"content": `<style>.bhyspqg9n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 4a1.5 1.5 0 1 1 1.5 1.5v1m0 0l-7 4h14Zm-3 4l.75 3.5L5 19.5h8.678m.065-.628l-1.06-2.591m-.611-3.783L12.5 10.5m3 4.75H21l-2.75 3Zm2.75 3V21m-1.75 0H20");
}
</style><path class="bhyspqg9n"/>`,
		"fallback": "uix-sharp:cocktail-attire",
	});
}

export default Component;
