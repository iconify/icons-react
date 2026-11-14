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

.m41ph0ygo {
  d: path("M9.75 9.5V6h4.75a2 2 0 0 1 2 2v7M7 6h2.75");
}

.qypcm1btb {
  d: path("M7 9.5h5.5v9H7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g6ulkabjn"/><path class="qypcm1btb"/><path class="m41ph0ygo"/></g>`,
		"fallback": "uix-sharp:fire-extinguisher-sign",
	});
}

export default Component;
