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
		"content": `<style>.rw7hzn9ir {
  d: path("M19 14.976V4.75c-2.5-.5-5.75 0-8 1.5c-2.25-1.5-5.5-2-8.5-1.5V18.5c3-.5 6.25 0 8.5 1.5c1.13-.753 2.512-1.254 3.924-1.503M11 6.25V20");
}

.rywc3sz4n {
  d: path("M18.5 15q0 3.5 3.5 3.5q-3.5 0-3.5 3.5q0-3.5-3.5-3.5q3.5 0 3.5-3.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rw7hzn9ir"/><path class="rywc3sz4n"/></g>`,
		"fallback": "uix-sharp:book-open-sparkle",
	});
}

export default Component;
