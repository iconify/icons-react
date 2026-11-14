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
		"content": `<style>.mrwyg6i-q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 11c0-3 3-4 9-4s9 1 9 4v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm5-4c0-3.5 8-3.5 8 0M3 12.5h18");
}
</style><path class="mrwyg6i-q"/>`,
		"fallback": "uix-sharp:duffel-bag",
	});
}

export default Component;
