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
		"content": `<style>.e870_rb0s {
  d: path("M13.5 11.5v3");
}

.gsq10_ixg {
  d: path("M7 6h4v3H7Z");
}

.ilzxawyks {
  fill: currentColor;
  d: path("M7 6h4v3H7Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.l7ilsmbrb {
  fill: currentColor;
  d: path("M6 3h11l4 4v12a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2V5a2 2 0 0 1 2 -2");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
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

.v2a0w6bwe {
  d: path("M10.5 14.5h3");
}

.w-w3xed8o {
  d: path("M10 14.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0");
}

.xyhuo_btk {
  fill: currentColor;
  d: path("M10 14.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="l7ilsmbrb"/><path class="ilzxawyks"/><path class="xyhuo_btk"/><path class="q7l4tcb1c"/><path class="gsq10_ixg"/><path class="w-w3xed8o"/><path class="e870_rb0s"/><path class="v2a0w6bwe"/></g>`,
		"fallback": "iconmind:early-checkin-duotone-bold",
	});
}

export default Component;
