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
		"content": `<style>.q43k4qsmm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm9 0h.01M6.5 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm7 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-5 7h.01m4.99 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}
</style><path class="q43k4qsmm"/>`,
		"fallback": "uix-sharp:braille",
	});
}

export default Component;
