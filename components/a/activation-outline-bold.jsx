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
		"content": `<style>.qe97cg-lx {
  d: path("M3 3v18h18");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.yt1wgcb2d {
  d: path("M5 17h7l7 -7");
}
</style><g class="s0phu2bbs"><path class="qe97cg-lx"/><path class="yt1wgcb2d"/></g>`,
		"fallback": "iconmind:activation-outline-bold",
	});
}

export default Component;
