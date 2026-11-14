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
		"content": `<style>.vu7pltc2g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm2 2V9M4.5 9h15v5h-15Zm-2 12h19M5 21l2.25-4l2.25 4l2.25-4L14 21l2.25-4l2.25 4");
}
</style><path class="vu7pltc2g"/>`,
		"fallback": "uix-sharp:block-print-stamp",
	});
}

export default Component;
