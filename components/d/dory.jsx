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
		"content": `<style>.n_-i3hb-i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 8h18.5q-2 6.5-8 6.5H5Zm13-5L8.25 17M6 19a1.25 2.25 0 1 0 2.5 0A1.25 2.25 0 1 0 6 19Z");
}
</style><path class="n_-i3hb-i"/>`,
		"fallback": "uix-sharp:dory",
	});
}

export default Component;
