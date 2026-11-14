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
		"content": `<style>.h6-fg9bkr {
  d: path("M20.5 3.5C16 3.5 12.5 6 10 10l4 4c4-2.5 6.5-6 6.5-10.5Z");
}

.tds05_giu {
  d: path("M10.5 9.5H7L4.5 12H8m6.5 1.5V17L12 19.5V16m2.5-8a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM5 15h4v4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h6-fg9bkr"/><path class="tds05_giu"/></g>`,
		"fallback": "uix-sharp:engagement-boost",
	});
}

export default Component;
