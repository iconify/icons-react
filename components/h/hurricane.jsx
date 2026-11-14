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
		"content": `<style>.nvebvjbad {
  d: path("M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x3wv0km9z {
  d: path("M8 12c0-6.5 5.5-9.5 12.5-8.5C16 4 13 5.5 12 8m4 4c0 6.5-5.5 9.5-12.5 8.5C8 20 11 18.5 12 16");
}
</style><g class="ulnmmdpxh"><path class="nvebvjbad"/><path class="x3wv0km9z"/></g>`,
		"fallback": "uix-sharp:hurricane",
	});
}

export default Component;
