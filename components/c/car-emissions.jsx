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
		"content": `<style>.vh31u_b2q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 20v-4l3-.75L10.5 12h6l2.5 3.25l2.5.75v4h-1.75a2 2 0 0 0-4 0H11.5a2 2 0 0 0-4 0ZM4.5 9a2 2 0 0 1 0-4a2.5 2.5 0 0 1 5 0a2 2 0 0 1 0 4Z");
}
</style><path class="vh31u_b2q"/>`,
		"fallback": "uix:car-emissions",
	});
}

export default Component;
