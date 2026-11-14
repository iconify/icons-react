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
		"content": `<style>.gihupnyfj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.875 11h2.25a4.375 4.375 0 0 1 4.375 4.375v1.25A4.375 4.375 0 0 1 13.125 21h-2.25A4.375 4.375 0 0 1 6.5 16.625v-1.25A4.375 4.375 0 0 1 10.875 11M9.5 11V8.5h5V11m-4-2.5V5a1.5 1.5 0 0 1 3 0v3.5");
}
</style><path class="gihupnyfj"/>`,
		"fallback": "uix:cosmetic-dropper",
	});
}

export default Component;
