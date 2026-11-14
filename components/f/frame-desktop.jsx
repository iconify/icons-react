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
		"content": `<style>.kivfy9jpj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 4h13.75A2.625 2.625 0 0 1 21.5 6.625v6.75A2.625 2.625 0 0 1 18.875 16H5.125A2.625 2.625 0 0 1 2.5 13.375v-6.75A2.625 2.625 0 0 1 5.125 4M12 16v4m-4 0h8");
}
</style><path class="kivfy9jpj"/>`,
		"fallback": "uix:frame-desktop",
	});
}

export default Component;
