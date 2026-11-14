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
		"content": `<style>.s6hz13b2a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 7.5h6a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Zm11 0h6a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Zm-4 3q1.5-1.5 3 0m3 1.25h2.25");
}
</style><path class="s6hz13b2a"/>`,
		"fallback": "uix-sharp:ar-glasses-display",
	});
}

export default Component;
