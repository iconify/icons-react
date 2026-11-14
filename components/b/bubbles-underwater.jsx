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
		"content": `<style>.df9076byj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 15.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0m10.5-6a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-5.75-5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}
</style><path class="df9076byj"/>`,
		"fallback": "uix:bubbles-underwater",
	});
}

export default Component;
