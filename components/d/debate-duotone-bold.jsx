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
		"content": `<style>.ayffwccdj {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m9 5 3 3 -2 2 3 3 -2 2 2.5 2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.h_h2a_b1l {
  d: path("M6.5 8.83a3.5 3.5 0 1 1 -2.96 0");
}

.i8-98acrg {
  d: path("m9 5 3 3 -2 2 3 3 -2 2 2.5 2.5");
}

.j1-6t3h5u {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M20.5 8.83a3.5 3.5 0 1 1 -2.96 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.m0fptpbiy {
  d: path("M20.5 8.83a3.5 3.5 0 1 1 -2.96 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.yardc-wzb {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6.5 8.83a3.5 3.5 0 1 1 -2.96 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="yardc-wzb"/><path class="j1-6t3h5u"/><path class="ayffwccdj"/><path class="h_h2a_b1l"/><path class="m0fptpbiy"/><path class="i8-98acrg"/></g>`,
		"fallback": "iconmind:debate-duotone-bold",
	});
}

export default Component;
