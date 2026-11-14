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
		"content": `<style>.x265m7ohu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 4a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm2 3.5L9 14m0 0l2.5 3v4M9 14l-2.5 7m0-10.5l3.25-2l4.75 3m0 0V21");
}
</style><path class="x265m7ohu"/>`,
		"fallback": "uix-sharp:elderly-person",
	});
}

export default Component;
