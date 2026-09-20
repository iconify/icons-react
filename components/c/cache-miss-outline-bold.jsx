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
		"content": `<style>.hh9110min {
  d: path("M4 11a7 7 0 1 0 14 0 7 7 0 1 0 -14 0");
}

.hyztp1b_a {
  d: path("m13.5 8.5 -5 5");
}

.nbsh9vihc {
  d: path("m16 16 3.5 3.5");
}

.rq3kv2xzk {
  d: path("m8.5 8.5 5 5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="hh9110min"/><path class="rq3kv2xzk"/><path class="hyztp1b_a"/><path class="nbsh9vihc"/></g>`,
		"fallback": "iconmind:cache-miss-outline-bold",
	});
}

export default Component;
