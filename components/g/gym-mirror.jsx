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
		"content": `<style>.gut4n976b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 14.5V8a5 5 0 0 1 10 0v6.5Zm2.75-4L13 7.25m-5.25 10zA1.25 1.25 0 0 1 9 18.5v2a1.25 1.25 0 0 1-1.25 1.25A1.25 1.25 0 0 1 6.5 20.5v-2a1.25 1.25 0 0 1 1.25-1.25m8.5 0za1.25 1.25 0 0 1 1.25 1.25v2a1.25 1.25 0 0 1-1.25 1.25A1.25 1.25 0 0 1 15 20.5v-2a1.25 1.25 0 0 1 1.25-1.25M9 19.5h6");
}
</style><path class="gut4n976b"/>`,
		"fallback": "uix:gym-mirror",
	});
}

export default Component;
