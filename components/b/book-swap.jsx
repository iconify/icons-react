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
		"content": `<style>.h6h2zm_6h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 2.5H9A1.5 1.5 0 0 1 10.5 4v6A1.5 1.5 0 0 1 9 11.5H5.5A1.5 1.5 0 0 1 4 10V4a1.5 1.5 0 0 1 1.5-1.5m9.5 0h3.5A1.5 1.5 0 0 1 20 4v6a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1-1.5-1.5V4A1.5 1.5 0 0 1 15 2.5m-8.25 0v9m9.5-9v9M4 16.5h16l-2.25-2.25M20 19.5H4l2.25 2.25");
}
</style><path class="h6h2zm_6h"/>`,
		"fallback": "uix:book-swap",
	});
}

export default Component;
