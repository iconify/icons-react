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
		"content": `<style>.c4khiwgvb {
  d: path("M8 15h8");
}

.gsq10_ixg {
  d: path("M7 6h4v3H7Z");
}

.iq7hdacem {
  d: path("M10.5 12.5 8 15l2.5 2.5");
}

.q7l4tcb1c {
  d: path("M6 3h11l4 4v12a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2V5a2 2 0 0 1 2 -2");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="q7l4tcb1c"/><path class="gsq10_ixg"/><path class="c4khiwgvb"/><path class="iq7hdacem"/></g>`,
		"fallback": "iconmind:hotel-check-out-outline-bold",
	});
}

export default Component;
