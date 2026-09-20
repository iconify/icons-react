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
		"content": `<style>.h1cr44bva {
  d: path("M3 12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.hi6fpzbzb {
  d: path("M13.5 16a2.5 2.5 0 0 1 -5 0");
}

.r0ac1hbbr {
  d: path("m13.5 16 3 -3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.v1-fmxxhj {
  d: path("M3 4.5A2.5 2.5 0 0 1 5.5 2h13A2.5 2.5 0 0 1 21 4.5 2.5 2.5 0 0 1 18.5 7h-13A2.5 2.5 0 0 1 3 4.5");
}
</style><g class="s0phu2bbs"><path class="v1-fmxxhj"/><path class="h1cr44bva"/><path class="hi6fpzbzb"/><path class="r0ac1hbbr"/></g>`,
		"fallback": "iconmind:image-sign-outline-bold",
	});
}

export default Component;
