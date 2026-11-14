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
		"content": `<style>.ctkfbpb1i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 5.5a8.5 2.5 0 1 0 17 0a8.5 2.5 0 1 0-17 0m0 13a8.5 2.5 0 1 0 17 0a8.5 2.5 0 1 0-17 0M8 7.75v8.5m8-8.5v8.5m0-4.75c3.5 0 5.5 1 5.5 3");
}
</style><path class="ctkfbpb1i"/>`,
		"fallback": "uix:filament-spool",
	});
}

export default Component;
