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
		"content": `<style>.qx9t01lzs {
  d: path("M7 4.5L3.5 8L7 11.5m.25 7.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w1fib_b8r {
  d: path("M3.5 8h12a5.5 5.5 0 0 1 0 11h-4.25");
}
</style><g class="ulnmmdpxh"><path class="w1fib_b8r"/><path class="qx9t01lzs"/></g>`,
		"fallback": "uix-sharp:git-revert",
	});
}

export default Component;
