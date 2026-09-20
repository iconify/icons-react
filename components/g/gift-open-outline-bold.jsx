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
		"content": `<style>.ege_q3bkn {
  d: path("m8 5 2 -2");
}

.i7iskytip {
  d: path("m13 6 3 -3");
}

.irf6xy5kk {
  d: path("M5 13v8h14v-8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.x50q_4bdr {
  d: path("M3 10h18");
}
</style><g class="s0phu2bbs"><path class="irf6xy5kk"/><path class="x50q_4bdr"/><path class="i7iskytip"/><path class="ege_q3bkn"/></g>`,
		"fallback": "iconmind:gift-open-outline-bold",
	});
}

export default Component;
