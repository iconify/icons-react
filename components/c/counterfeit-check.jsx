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
		"content": `<style>.qxuchg8fa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M18.571 4.429za3.5 3.5 0 0 1 0 4.95l-9.192 9.192a3.5 3.5 0 0 1-4.95 0a3.5 3.5 0 0 1 0-4.95l9.192-9.192a3.5 3.5 0 0 1 4.95 0M9.025 9.025l4.95 4.95M14.75 18l2 2L21 15.75");
}
</style><path class="qxuchg8fa"/>`,
		"fallback": "uix:counterfeit-check",
	});
}

export default Component;
