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
		"content": `<style>.w-j-w2x0g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 14h11L16 21H8Zm5.5 0V8m0 2c0-3-2.5-5-5.5-5c0 3 2.5 5 5.5 5m0-2c0-2.5 2-4.5 5-4.5C17 6 15 8 12 8");
}
</style><path class="w-j-w2x0g"/>`,
		"fallback": "uix:garden-cover",
	});
}

export default Component;
