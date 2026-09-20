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
		"content": `<style>.j_0vo4w0c {
  d: path("M6 13a2.5 2.5 0 0 1 2.5 -2.5h7A2.5 2.5 0 0 1 18 13a2.5 2.5 0 0 1 -2.5 2.5h-7A2.5 2.5 0 0 1 6 13");
}

.jrpnc2pnl {
  d: path("M15 5h3a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V8a3 3 0 0 1 3 -3h3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="jrpnc2pnl"/><path class="j_0vo4w0c"/></g>`,
		"fallback": "iconmind:dashboard-row-outline-bold",
	});
}

export default Component;
