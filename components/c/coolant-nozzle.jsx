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
		"content": `<style>.mqvkjwr1p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h7A3.5 3.5 0 0 1 13 6v2.5L12 10h-2L9 8.5V7a.5.5 0 0 0-.5-.5h-6M4 18.75h16v2.75H4Zm7-6l1.25 2a1.25 1.25 0 1 1-2.5 0Z");
}
</style><path class="mqvkjwr1p"/>`,
		"fallback": "uix-sharp:coolant-nozzle",
	});
}

export default Component;
