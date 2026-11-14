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
		"content": `<style>.zpndd-b8j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.5 7.25l-1.5 13h7.5l1.5-7l1.5 7H21l-1.5-13v-3.5h-15Zm0 0h15");
}
</style><path class="zpndd-b8j"/>`,
		"fallback": "uix:fight-shorts",
	});
}

export default Component;
