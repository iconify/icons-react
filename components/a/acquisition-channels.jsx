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
		"content": `<style>.zmc62e0ss {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 19v-6M7 19V5m3.5 14V9m3-4l4.5 5.5h3M13.5 19l4.5-5.5h3");
}
</style><path class="zmc62e0ss"/>`,
		"fallback": "uix:acquisition-channels",
	});
}

export default Component;
