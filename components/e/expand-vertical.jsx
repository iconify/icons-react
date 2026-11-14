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
		"content": `<style>.rzlyqjk8g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M20 12H4m11.5-3.5L12 5L8.5 8.5m7 7L12 19l-3.5-3.5");
}
</style><path class="rzlyqjk8g"/>`,
		"fallback": "uix:expand-vertical",
	});
}

export default Component;
