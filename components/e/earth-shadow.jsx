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
		"content": `<style>.b7_hu_9oq {
  d: path("M3 12a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0Z");
}

.oiqxm-y6u {
  d: path("M11.25 7.25L20 12l-8.75 4.75M8.5 6.5v11");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b7_hu_9oq"/><path class="oiqxm-y6u"/></g>`,
		"fallback": "uix-sharp:earth-shadow",
	});
}

export default Component;
