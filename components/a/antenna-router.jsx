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
		"content": `<style>.g6dy8gkdv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11h19v9h-19Zm4 0l-3-8M7 15.5h.01m3.49 0h.01");
}
</style><path class="g6dy8gkdv"/>`,
		"fallback": "uix-sharp:antenna-router",
	});
}

export default Component;
