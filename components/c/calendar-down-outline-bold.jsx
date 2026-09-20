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
		"content": `<style>.j6apg33fy {
  d: path("M16 2.5V5");
}

.jrpnc2pnl {
  d: path("M15 5h3a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V8a3 3 0 0 1 3 -3h3");
}

.qaa4bo00g {
  d: path("M8 2.5V5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tjvfebbkf {
  d: path("M9.5 16.5 12 19l2.5 -2.5");
}

.x50q_4bdr {
  d: path("M3 10h18");
}

.y-v0chbkd {
  d: path("M12 12.5V19");
}
</style><g class="s0phu2bbs"><path class="jrpnc2pnl"/><path class="x50q_4bdr"/><path class="qaa4bo00g"/><path class="j6apg33fy"/><path class="y-v0chbkd"/><path class="tjvfebbkf"/></g>`,
		"fallback": "iconmind:calendar-down-outline-bold",
	});
}

export default Component;
