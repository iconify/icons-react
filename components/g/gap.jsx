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
		"content": `<style>.j3pqqzqly {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 4za2 2 0 0 1 2 2v12a2 2 0 0 1-2 2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m15 0za2 2 0 0 1 2 2v12a2 2 0 0 1-2 2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2M9.25 12h5.5m-3.5-2l-2 2l2 2m1.5-4l2 2l-2 2");
}
</style><path class="j3pqqzqly"/>`,
		"fallback": "uix:gap",
	});
}

export default Component;
