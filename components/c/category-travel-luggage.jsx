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
		"content": `<style>.i325c2bri {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 7h14v14H5Zm4 0V4.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V7m-5.5 4v6m5-6v6");
}
</style><path class="i325c2bri"/>`,
		"fallback": "uix-sharp:category-travel-luggage",
	});
}

export default Component;
