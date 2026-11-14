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
		"content": `<style>.dzcqnyb3r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.272 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5c1.236 0 2.387.19 3.398.54M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0m8 11h3.75m-2-2l2 2l-2 2m3.25-5.5h2v7h-2");
}
</style><path class="dzcqnyb3r"/>`,
		"fallback": "uix:account-login",
	});
}

export default Component;
