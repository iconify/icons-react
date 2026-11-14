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
		"content": `<style>.f0ybfrbaz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.375 7.5h5.25A4.375 4.375 0 0 1 19 11.875v.25a4.375 4.375 0 0 1-4.375 4.375h-5.25A4.375 4.375 0 0 1 5 12.125v-.25A4.375 4.375 0 0 1 9.375 7.5M5 9c-2 0-2.5 1.5-2.5 3S3 15 5 15m14-6c2 0 2.5 1.5 2.5 3s-.5 3-2.5 3M8 10.5h8m-8 3h8");
}
</style><path class="f0ybfrbaz"/>`,
		"fallback": "uix:face-mask",
	});
}

export default Component;
