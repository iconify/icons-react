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
		"content": `<style>.qgf9dea6v {
  fill: currentColor;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm0 7a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm0 7a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}
</style><path class="qgf9dea6v"/>`,
		"fallback": "uix-sharp:context-menu",
	});
}

export default Component;
