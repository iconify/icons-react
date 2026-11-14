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
		"content": `<style>.y2cnq8t9m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 4.5h14m-11 0v6m8-6v6m-13.5 0h19V15h-19Zm0 8.5q2.25-1.75 4.75 0Q9.5 20.75 12 19t4.75 0t4.75 0");
}
</style><path class="y2cnq8t9m"/>`,
		"fallback": "uix-sharp:float-pontoon",
	});
}

export default Component;
