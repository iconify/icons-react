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
		"content": `<style>.jh--vwb6r {
  d: path("M7 12a5 5 0 1 0 10 0a5 5 0 1 0-10 0Z");
}

.oob1eccnf {
  d: path("M11 9.5h2l-2 5h2Zm-2.5-1L6 4L3.5 5.5m3.75 5L4 8l-1.5 2.5m4.75 3L4 13l-1.5 3m6-.5l-2.5 2l-1.5 3m11-12L18 4l2.5 1.5m-3.75 5L20 8l1.5 2.5m-4.75 3L20 13l1.5 3m-6-.5l2.5 2l1.5 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jh--vwb6r"/><path class="oob1eccnf"/></g>`,
		"fallback": "uix-sharp:black-widow",
	});
}

export default Component;
