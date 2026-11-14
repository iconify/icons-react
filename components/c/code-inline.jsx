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
		"content": `<style>.hp_udv2wl {
  d: path("M8.25 9.25L5.5 12l2.75 2.75m7.5-5.5L18.5 12l-2.75 2.75M13 9.25l-2 5.5");
}

.rea3x2bzc {
  d: path("M2.5 6.5h19v11h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rea3x2bzc"/><path class="hp_udv2wl"/></g>`,
		"fallback": "uix-sharp:code-inline",
	});
}

export default Component;
