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

.vvjh53a6m {
  d: path("m4 6.5l8 4l8-4m-8 4V18m-8 3h16M4 19.5V22m16-2.5V22");
}

.wp1-aubkc {
  d: path("m12.783 2.891l6.25 3.125A1.75 1.75 0 0 1 20 7.582v5.336a1.75 1.75 0 0 1-.967 1.566l-6.25 3.125a1.75 1.75 0 0 1-1.566 0l-6.25-3.125A1.75 1.75 0 0 1 4 12.918V7.582a1.75 1.75 0 0 1 .967-1.566l6.25-3.125a1.75 1.75 0 0 1 1.566 0");
}
</style><g class="hntgybcog"><path class="wp1-aubkc"/><path class="vvjh53a6m"/></g>`,
		"fallback": "uix:bundle-size",
	});
}

export default Component;
