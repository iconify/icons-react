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
		"content": `<style>.fuuxnqmxm {
  d: path("M7.5 11.5L3 16l2 1.5L9.5 13Zm4-1.5h.01");
}

.lklcojbia {
  d: path("M7 10.5c2-4 10-3.5 13.5 0C17 14 9 14.5 7 10.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lklcojbia"/><path class="fuuxnqmxm"/></g>`,
		"fallback": "uix-sharp:crankbait",
	});
}

export default Component;
