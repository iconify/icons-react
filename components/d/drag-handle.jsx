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
		"content": `<style>.zbd7qgbcc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 5.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm6 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0ZM8 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm6 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm-6 6.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm6 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}
</style><path class="zbd7qgbcc"/>`,
		"fallback": "uix-sharp:drag-handle",
	});
}

export default Component;
