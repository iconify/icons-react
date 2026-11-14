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
		"content": `<style>.pglgxabbk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 3.75l-2 5.5l-6 .25l4.5 3.75L7 19l5-3.25m0-12l2 5.5l6 .25l-4.5 3.75L17 19l-5-3.25");
}
</style><path class="pglgxabbk"/>`,
		"fallback": "uix:favorite",
	});
}

export default Component;
