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
		"content": `<style>.f1k4_54eo {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.92 10.05a3 3 0 1 1 4.52-3.13a7.25 7.25 0 0 1 3.12 0a3 3 0 1 1 4.52 3.13a7.25 7.25 0 1 1-12.16 0");
}

.qzb6f1vsy {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 15.25c2.25 1.75 5.75 1.75 8 0");
}

.y6uprylka {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.5 7.5h.01m8.99 0h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="f1k4_54eo"/><path class="y6uprylka"/><path class="qzb6f1vsy"/></g>`,
		"fallback": "iconoven:frog",
	});
}

export default Component;
