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
		"content": `<style>.e8rdc0baq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 16.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0Zm10.5-7a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM19 4a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}
</style><path class="e8rdc0baq"/>`,
		"fallback": "uix-sharp:earth-moon-sun",
	});
}

export default Component;
