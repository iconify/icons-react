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
		"content": `<style>.c-vnm8iux {
  d: path("M15 12h3");
}

.c5icmybsm {
  d: path("m4 12 6 -6h10v12H10Z");
}

.k_2z93bzc {
  fill: currentColor;
  d: path("M11 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.n3p0zmbop {
  d: path("M11 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.nwys7tb-b {
  fill: currentColor;
  d: path("m4 12 6 -6h10v12H10Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="nwys7tb-b"/><path class="k_2z93bzc"/><path class="c5icmybsm"/><path class="n3p0zmbop"/><path class="c-vnm8iux"/></g>`,
		"fallback": "iconmind:data-tag-duotone-bold",
	});
}

export default Component;
