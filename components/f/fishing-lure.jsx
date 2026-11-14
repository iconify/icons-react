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
		"content": `<style>.h9jfe3euv {
  d: path("M5.5 9a1 1 0 1 0 2 0a1 1 0 1 0-2 0ZM8 13v3.5a1.75 1.75 0 0 0 3.5 0m2.5-4V16a1.75 1.75 0 0 0 3.5 0");
}

.ia54snzqy {
  d: path("M3 9.5C5 6 13 5.5 18 8l3-1.5v6L18 11c-5 2.5-13 2-15-1.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ia54snzqy"/><path class="h9jfe3euv"/></g>`,
		"fallback": "uix-sharp:fishing-lure",
	});
}

export default Component;
