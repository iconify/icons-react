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
		"content": `<style>.j8qckyccj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.875 3.5h8.25A4.375 4.375 0 0 1 20.5 7.875v8.25a4.375 4.375 0 0 1-4.375 4.375h-8.25A4.375 4.375 0 0 1 3.5 16.125v-8.25A4.375 4.375 0 0 1 7.875 3.5M7 13l6-6m-2.5 9.5l6-6");
}
</style><path class="j8qckyccj"/>`,
		"fallback": "uix:colour-metallic",
	});
}

export default Component;
