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
		"content": `<style>.i30i2km0k {
  fill: currentColor;
  d: path("M7 20.5V16l2.25-3.5l3.25-1l2.75 1.5L17 16.5v4Z");
}

.o0c575djr {
  d: path("m2.5 20.5l3-9.5L9 3.5l3.5 4l2.5-1l4 5.5l2.5 8.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o0c575djr"/><path class="i30i2km0k"/></g>`,
		"fallback": "uix-sharp:cave-opening",
	});
}

export default Component;
