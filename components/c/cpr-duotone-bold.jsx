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
		"content": `<style>.feh5q_b1s {
  d: path("M5 14a3.5 3.5 0 0 1 7 0 3.5 3.5 0 0 1 7 0l-7 7Z");
}

.q0ktj58ea {
  fill: currentColor;
  d: path("M5 14a3.5 3.5 0 0 1 7 0 3.5 3.5 0 0 1 7 0l-7 7Z");
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

.w7dz13y2v {
  d: path("m8 2 4 4 4 -4");
}

.wgzf3kbdp {
  d: path("m8 6 4 4 4 -4");
}
</style><g class="s0phu2bbs"><path class="q0ktj58ea"/><path class="feh5q_b1s"/><path class="wgzf3kbdp"/><path class="w7dz13y2v"/></g>`,
		"fallback": "iconmind:cpr-duotone-bold",
	});
}

export default Component;
