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
		"content": `<style>.w4aoo3b6n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM17 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM8.5 15.5l7-7m-4 0h4v4");
}
</style><path class="w4aoo3b6n"/>`,
		"fallback": "uix-sharp:displacement",
	});
}

export default Component;
