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
		"content": `<style>.wg5r7ukln {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 6v3q0 4.5 6 4.5T18 9V6m-6 0v12m-4 3h8l-2-3h-4ZM6 3.25h.01m5.99 0h.01m5.99 0h.01");
}
</style><path class="wg5r7ukln"/>`,
		"fallback": "uix-sharp:candelabra",
	});
}

export default Component;
