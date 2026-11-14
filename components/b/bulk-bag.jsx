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
		"content": `<style>.r5nkqtule {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 6.5h14c2 4 2 10 0 14H5c-2-4-2-10 0-14Zm0 0c0-4 4-4 4 0m6 0c0-4 4-4 4 0");
}
</style><path class="r5nkqtule"/>`,
		"fallback": "uix-sharp:bulk-bag",
	});
}

export default Component;
