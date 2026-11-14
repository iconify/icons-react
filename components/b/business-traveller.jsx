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
		"content": `<style>.gyh5gccgx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 6.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0M2.5 21c0-4 3.25-7 7-7c1.562 0 2.925.398 4.089 1.018M16.75 16.5h3a1.75 1.75 0 0 1 1.75 1.75v1.5a1.75 1.75 0 0 1-1.75 1.75h-3A1.75 1.75 0 0 1 15 19.75v-1.5a1.75 1.75 0 0 1 1.75-1.75m.25 0V15h2.5v1.5");
}
</style><path class="gyh5gccgx"/>`,
		"fallback": "uix:business-traveller",
	});
}

export default Component;
