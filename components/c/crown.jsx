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
		"content": `<style>.llze2g3km {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.25 10l.721.641a1.75 1.75 0 0 0 2.635-.361l1.922-2.99a1.75 1.75 0 0 1 2.944 0l1.922 2.99a1.75 1.75 0 0 0 2.635.361L18.75 10a1.038 1.038 0 0 1 1.711.962l-1.2 6.601A1.75 1.75 0 0 1 17.539 19H6.461a1.75 1.75 0 0 1-1.722-1.437l-1.2-6.601A1.038 1.038 0 0 1 5.25 10");
}
</style><path class="llze2g3km"/>`,
		"fallback": "uix:crown",
	});
}

export default Component;
