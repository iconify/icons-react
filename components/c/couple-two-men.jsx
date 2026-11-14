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
		"content": `<style>.q68tilb-y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 8a3 3 0 1 0 6 0a3 3 0 1 0-6 0m-2 11.5c0-3.25 2.25-5 5-5s4.5 1.75 4.5 5M13.5 8a3 3 0 1 0 6 0a3 3 0 1 0-6 0M12 19.5c0-3.25 1.75-5 4.5-5s5 1.75 5 5");
}
</style><path class="q68tilb-y"/>`,
		"fallback": "uix:couple-two-men",
	});
}

export default Component;
