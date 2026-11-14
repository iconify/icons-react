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
		"content": `<style>.ioogn5bkv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 5c-1.5 7 3 15 13 14.5c2-.1 2.5-2 1-2.5c-6.5-1-10-6-11.5-12.5Z");
}
</style><path class="ioogn5bkv"/>`,
		"fallback": "uix:banana",
	});
}

export default Component;
