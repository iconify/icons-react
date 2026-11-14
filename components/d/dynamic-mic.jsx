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
		"content": `<style>.ds5xxfb9d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 11.5a5 5 0 1 1 6 0l-1.5 9a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1Zm0 0h6m-8-4h10");
}
</style><path class="ds5xxfb9d"/>`,
		"fallback": "uix-sharp:dynamic-mic",
	});
}

export default Component;
