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
		"content": `<style>.r-acf5b0i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10.5h19l-2 4.5h-15Zm2-5h5v5h-5Zm-2 13q2.25-1.5 4.5 0t4.5 0t4.5 0t4.5 0");
}
</style><path class="r-acf5b0i"/>`,
		"fallback": "uix-sharp:barge",
	});
}

export default Component;
