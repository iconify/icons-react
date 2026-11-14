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
		"content": `<style>.ocl4q-d-n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 6h16l-8 8Zm8 8v7m-4 0h8M7 9h10m-3.5-3a3.5 3.5 0 0 1 7 0");
}
</style><path class="ocl4q-d-n"/>`,
		"fallback": "uix:cosmopolitan",
	});
}

export default Component;
