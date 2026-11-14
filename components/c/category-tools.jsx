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
		"content": `<style>.nlv0vzbwi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.5 4.5A4.5 4.5 0 0 0 10 10l-6.5 6.5a2 2 0 0 0 4 4L14 14a4.5 4.5 0 0 0 5.5-4.5l-3 3l-4-4Z");
}
</style><path class="nlv0vzbwi"/>`,
		"fallback": "uix-sharp:category-tools",
	});
}

export default Component;
