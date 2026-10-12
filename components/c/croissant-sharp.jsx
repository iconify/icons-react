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
		"content": `<style>.y6yfthblv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 16.5C2.75 10.75 7 6.25 12 6.25s9.25 4.5 8.5 10.25l-.21 1.575L19 17l-3-2.5l-1.75 1.75h-4.5L8 14.5L5 17l-1.29 1.075zm5.75-8.25L10 13.5m4.75-5.25L14 13.5");
}
</style><path class="y6yfthblv"/>`,
		"fallback": "iconoven:croissant-sharp",
	});
}

export default Component;
