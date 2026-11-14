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
		"content": `<style>.vl31llz7d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.5 5.5l-5 6.5l5 6.5m9-13l5 6.5l-5 6.5m-7-11h5m-2.5 0V17");
}
</style><path class="vl31llz7d"/>`,
		"fallback": "uix:generic-type",
	});
}

export default Component;
