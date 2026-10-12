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
		"content": `<style>.zcjsc7bcz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 9.5Q5 7 7.25 9.5t4.5 0m-9 5.5q2.25-2.5 4.5 0t4.5 0t4.5 0t4.5 0m-6-4.75c0-4.25 2.25-6.75 6.5-7c0 4.25-2.25 7-6.5 7Z");
}
</style><path class="zcjsc7bcz"/>`,
		"fallback": "iconoven:breeze-sharp",
	});
}

export default Component;
