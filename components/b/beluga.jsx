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
		"content": `<style>.r9zjf8bih {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 14c0-4 2.5-6 6-6c5 0 7.5 4 9.5 6.5l2.5-2V18l-2.5-1.5q-3.75 3-9 3c-4 0-6.5-2-6.5-5.5Zm4-1h.01M5.75 5.25L4.5 3m3.75 2.25L9.5 3");
}
</style><path class="r9zjf8bih"/>`,
		"fallback": "uix-sharp:beluga",
	});
}

export default Component;
