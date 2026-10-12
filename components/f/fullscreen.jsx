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
		"content": `<style>.ejayzwbex {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 8.75v-3a2 2 0 0 1 2-2h3m11.5 11.5v3a2 2 0 0 1-2 2h-3m0-16.5h3a2 2 0 0 1 2 2v3m-11.5 11.5h-3a2 2 0 0 1-2-2v-3");
}
</style><path class="ejayzwbex"/>`,
		"fallback": "iconoven:fullscreen",
	});
}

export default Component;
