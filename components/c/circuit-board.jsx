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
		"content": `<style>.g6ulkabjn {
  d: path("M2.5 2.5h19v19h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x3wxj1b6s {
  d: path("M8.5 8.5h7v7h-7Zm0 2h-3m3 3h-3v5m10-5h3m-3-3h3v-5m-13 5h.01m-.01 8h.01m12.99-5h.01m-.01-8h.01");
}
</style><g class="ulnmmdpxh"><path class="g6ulkabjn"/><path class="x3wxj1b6s"/></g>`,
		"fallback": "uix-sharp:circuit-board",
	});
}

export default Component;
