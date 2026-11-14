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
		"content": `<style>.et5icxbhx {
  d: path("M10.75 6.5C13.25 6.25 14 7.75 16 8c1.75.75 2 3.5 1 5.25c-.75 2-.25 3.75-3.25 4.5c-2.25.25-3.25-1.25-5-1.5c-2.25-.25-2.75-2.5-2.5-4.5C6.5 9.25 8.5 7 10.75 6.5");
}

.etjiahbmp {
  d: path("M10 3c4-.5 5.5 2 8.5 2.5c3 1 3.5 5.5 2 8.5c-1.5 3.5-.5 6.5-5.5 7.5c-4 .5-5.5-2-8.5-2.5c-3.5-.5-4.5-4-4-7.5C3 7.5 6 3.5 10 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z67d5qbhx {
  d: path("M11.75 9.5c.75 0 1.25.75 2 .75c.75.25 1 1.5.5 2.25c-.5 1-.25 1.75-1.5 2c-1 .25-1.5-.5-2.25-.75c-1 0-1.25-1-1-2c0-1 .25-2 2.25-2.25M12 12h.01");
}
</style><g class="hntgybcog"><path class="etjiahbmp"/><path class="et5icxbhx"/><path class="z67d5qbhx"/></g>`,
		"fallback": "uix:contour-map-mine",
	});
}

export default Component;
