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
		"content": `<style>.apk3gupag {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.75 10h2.5A1.75 1.75 0 0 1 15 11.75v7.5A1.75 1.75 0 0 1 13.25 21h-2.5A1.75 1.75 0 0 1 9 19.25v-7.5A1.75 1.75 0 0 1 10.75 10M5.5 21h13M12 8.25c-1.25 0-2-.75-2-2s1-2.25 2-3.5C13 4 14 5 14 6.25s-.75 2-2 2m0 0V10");
}
</style><path class="apk3gupag"/>`,
		"fallback": "uix:donate-in-memory",
	});
}

export default Component;
