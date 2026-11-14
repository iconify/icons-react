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
		"content": `<style>.bzznfobby {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 7.75a2.75 4 0 1 0 5.5 0a2.75 4 0 1 0-5.5 0m9 3.25a2.75 4 0 1 0 5.5 0a2.75 4 0 1 0-5.5 0m-8.5 4.25a2.25 1.75 0 1 0 4.5 0a2.25 1.75 0 1 0-4.5 0m9 3.25a2.25 1.75 0 1 0 4.5 0a2.25 1.75 0 1 0-4.5 0");
}
</style><path class="bzznfobby"/>`,
		"fallback": "uix:gemba-walk",
	});
}

export default Component;
