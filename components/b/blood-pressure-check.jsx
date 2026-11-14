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
		"content": `<style>.fd0udqqmz {
  d: path("M9.5 14.5c0 3 2 3.5 5 3.5m0 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm-5-9.5l2.75-2.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wyh8whbzr {
  d: path("M3.5 8.5a6 6 0 1 0 12 0a6 6 0 1 0-12 0Z");
}
</style><g class="ulnmmdpxh"><path class="wyh8whbzr"/><path class="fd0udqqmz"/></g>`,
		"fallback": "uix-sharp:blood-pressure-check",
	});
}

export default Component;
