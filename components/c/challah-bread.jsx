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
		"content": `<style>.oqcb8_b6z {
  d: path("M8 7.5q1.75 5.5 0 11m8-11q1.75 5.5 0 11");
}

.r37vqwqws {
  d: path("M3 13.5c0-5 2.5-6.5 5-6c1-2 7-2 8 0c2.5-.5 5 1 5 6c0 3.5-2 5-5 5H8c-3 0-5-1.5-5-5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="r37vqwqws"/><path class="oqcb8_b6z"/></g>`,
		"fallback": "uix-sharp:challah-bread",
	});
}

export default Component;
