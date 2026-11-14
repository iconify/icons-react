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
		"content": `<style>.u6ldk8bsh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 9a1 1 0 1 0 2 0a1 1 0 1 0-2 0ZM11 9a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm6.5 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm-13 6a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm6.5 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm6.5 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}
</style><path class="u6ldk8bsh"/>`,
		"fallback": "uix-sharp:drag-handle-horizontal",
	});
}

export default Component;
