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
		"content": `<style>.l8unaacgj {
  d: path("M2 12h5");
}

.m2zfyio4u {
  d: path("m5 10 2 2 -2 2");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.s91z9mxxg {
  d: path("M22 12h-5");
}

.uqi2guhey {
  d: path("m19 10 -2 2 2 2");
}

.zey5ebc0a {
  d: path("M7 12a5 5 0 1 0 10 0 5 5 0 1 0 -10 0");
}
</style><g class="s0phu2bbs"><path class="zey5ebc0a"/><path class="l8unaacgj"/><path class="m2zfyio4u"/><path class="s91z9mxxg"/><path class="uqi2guhey"/></g>`,
		"fallback": "iconmind:breathe-in-outline-bold",
	});
}

export default Component;
