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
		"content": `<style>.q1wra3bex {
  d: path("M2 4a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.qj71t0baf {
  d: path("M4 19h8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t_rr8ablw {
  d: path("m7 16 -3 3 3 3");
}

.zlf0p6b7k {
  d: path("M8 9a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H10a2 2 0 0 1 -2 -2Z");
}
</style><g class="s0phu2bbs"><path class="q1wra3bex"/><path class="zlf0p6b7k"/><path class="qj71t0baf"/><path class="t_rr8ablw"/></g>`,
		"fallback": "iconmind:flashcard-flip-outline-bold",
	});
}

export default Component;
