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
		"content": `<style>.woa3rv-ll {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 14.5h8.5a2.25 2.25 0 0 1 2.25 2.25A2.25 2.25 0 0 1 16.25 19h-8.5a2.25 2.25 0 0 1-2.25-2.25a2.25 2.25 0 0 1 2.25-2.25M3 21h18M9 7.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m-5 0h2m12 0h2M8.25 3.75l-1-1m8.5 1l1-1");
}
</style><path class="woa3rv-ll"/>`,
		"fallback": "uix:dose-noon",
	});
}

export default Component;
