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
		"content": `<style>.cq8r84bse {
  d: path("M20 21V4h-4v17");
}

.l90ci7bpu {
  d: path("m12 9.5 2.5 2.5 -2.5 2.5");
}

.pnevpfb0l {
  d: path("M4 21V4h4v17");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.srslrxb7v {
  d: path("M10 12h4.5");
}
</style><g class="s0phu2bbs"><path class="pnevpfb0l"/><path class="cq8r84bse"/><path class="srslrxb7v"/><path class="l90ci7bpu"/></g>`,
		"fallback": "iconmind:boarding-gate-outline-bold",
	});
}

export default Component;
