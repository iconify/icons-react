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
		"content": `<style>.cu8x1jb2r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 13c0-4.75 4-8 9-8s9 3.25 9 8c0 1.75-.75 2.75-2 2.75H5c-1.25 0-2-1-2-2.75m9-6.5V14M8.25 7.5L9.5 14m6.25-6.5L14.5 14m-9.25 4.25h13.5c-1 2-3.5 3-6.75 3s-5.75-1-6.75-3");
}
</style><path class="cu8x1jb2r"/>`,
		"fallback": "iconoven:clam",
	});
}

export default Component;
