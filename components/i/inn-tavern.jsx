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
		"content": `<style>.o1n5azi9y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 8.5V19a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V8.5m-11.5 0a2.25 2.25 0 0 1 2-4A3 3 0 0 1 12 4a3.25 3.25 0 0 1 4.5 4.5ZM16 11h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2");
}
</style><path class="o1n5azi9y"/>`,
		"fallback": "uix-sharp:inn-tavern",
	});
}

export default Component;
