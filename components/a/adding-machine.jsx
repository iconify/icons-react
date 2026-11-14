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
		"content": `<style>.hab_acb9y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 7h10a3.5 3.5 0 0 1 3.5 3.5V18a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 18v-7.5A3.5 3.5 0 0 1 7 7m2.5 0V2.5h5a2 2 0 0 1 2 2V7M7 10.5h10m-9.5 3.25h.01m4.49 0h.01m4.49 0h.01M7.5 16.5h.01m4.49 0h.01m4.49 0h.01M7.5 19h.01M12 19h.01m4.49 0h.01");
}
</style><path class="hab_acb9y"/>`,
		"fallback": "uix:adding-machine",
	});
}

export default Component;
