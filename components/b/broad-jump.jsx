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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p8ydbtbif {
  d: path("M3.5 14a8 8 0 0 1 16 0");
}

.rj7vqtkll {
  d: path("M17.25 11.75L19.5 14l2.25-2.25M2.5 17.5H9V20h12.5");
}
</style><g class="hntgybcog"><path class="p8ydbtbif"/><path class="rj7vqtkll"/></g>`,
		"fallback": "uix:broad-jump",
	});
}

export default Component;
