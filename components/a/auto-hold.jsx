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
		"content": `<style>.m6pbrubtx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 12a6 6 0 1 0 12 0a6 6 0 1 0-12 0m-.75 6.75a9.5 9.5 0 0 1 0-13.5m13.5 0a9.5 9.5 0 0 1 0 13.5m-8.25-9v4.5m3-4.5v4.5");
}
</style><path class="m6pbrubtx"/>`,
		"fallback": "uix:auto-hold",
	});
}

export default Component;
