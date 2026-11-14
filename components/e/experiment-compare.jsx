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
		"content": `<style>.x6zy9e1wz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3h3v6l2.5 12h-8L5 9Zm10.75 0h3v6l2.5 12h-8l2.5-12Zm-12 12h5.5m5.25 0H20");
}
</style><path class="x6zy9e1wz"/>`,
		"fallback": "uix-sharp:experiment-compare",
	});
}

export default Component;
