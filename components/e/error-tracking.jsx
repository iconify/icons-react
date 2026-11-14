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
		"content": `<style>.fb8ne-bfa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 3.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M4.5 12.5a4 4.25 0 1 0 8 0a4 4.25 0 1 0-8 0m4-4.25v8.5M5.25 10L3 8.5m1.5 4h-2M5.25 15L3 16.75M11.75 10L14 8.5m-1.5 4h2M11.75 15l.96.72m2.54 1.78a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m4 1.75L21 21");
}
</style><path class="fb8ne-bfa"/>`,
		"fallback": "uix:error-tracking",
	});
}

export default Component;
