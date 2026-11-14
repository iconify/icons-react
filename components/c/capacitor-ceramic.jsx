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
		"content": `<style>.h0wgwrbge {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 9a6 6 0 1 0 12 0A6 6 0 1 0 6 9m3.5 6v6.5m5-6.5v6.5m-5-14h5");
}
</style><path class="h0wgwrbge"/>`,
		"fallback": "uix:capacitor-ceramic",
	});
}

export default Component;
