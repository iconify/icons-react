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
		"content": `<style>.e33rz5cbt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm7 0h10");
}
</style><path class="e33rz5cbt"/>`,
		"fallback": "uix-sharp:bullet",
	});
}

export default Component;
