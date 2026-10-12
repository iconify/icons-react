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
		"content": `<style>.ew7v1pbwm {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 16.5h.01");
}

.ssojhxbnm {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m15 9.5l2.552 2.5L15 14.5M18 7a7 7 0 0 1 0 10");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.w59jo3t8a {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 2.75h8.5v18.5h-8.5zm2.75 4h3m-3 3h3");
}
</style><g class="ux2u0rbkq"><path class="w59jo3t8a"/><path class="ew7v1pbwm"/><path class="ssojhxbnm"/></g>`,
		"fallback": "iconoven:audio-guide-sharp",
	});
}

export default Component;
