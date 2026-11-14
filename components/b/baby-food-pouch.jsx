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
		"content": `<style>.w6aikg78b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 7.5h9l1.75 14H5.75Zm5-4.5H17v4.5h-4.5ZM6.25 17.5h11.5");
}
</style><path class="w6aikg78b"/>`,
		"fallback": "uix-sharp:baby-food-pouch",
	});
}

export default Component;
