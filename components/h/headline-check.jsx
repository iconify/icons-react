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
		"content": `<style>.p99bo7tav {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h19v7h-19Zm4 3.5h11M3 15.5h8m3.75 2.5l2 2L21 15.75");
}
</style><path class="p99bo7tav"/>`,
		"fallback": "uix-sharp:headline-check",
	});
}

export default Component;
