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
		"content": `<style>.acnb1hz5q {
  d: path("m22 14 -6 6");
}

.fgqk6gbgn {
  d: path("M2.4 16a6.6 6.6 0 0 1 13.2 0");
}

.jy2rzibrh {
  d: path("M6 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.xpov22bfs {
  d: path("m16 14 6 6");
}
</style><g class="s0phu2bbs"><path class="jy2rzibrh"/><path class="fgqk6gbgn"/><path class="xpov22bfs"/><path class="acnb1hz5q"/></g>`,
		"fallback": "iconmind:absent-outline-bold",
	});
}

export default Component;
