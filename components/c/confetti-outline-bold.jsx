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
		"content": `<style>.k04qs_b8d {
  d: path("m9 18 3 3");
}

.nk-dq3bmo {
  d: path("m16 14 3 3");
}

.p59zvybqt {
  d: path("m4 13 3 3");
}

.pfvjrtb4r {
  d: path("m15 5 3 3");
}

.r-0o544te {
  d: path("m5 4 3 3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.som9nz4hy {
  d: path("m10 10 3 3");
}
</style><g class="s0phu2bbs"><path class="r-0o544te"/><path class="pfvjrtb4r"/><path class="p59zvybqt"/><path class="nk-dq3bmo"/><path class="som9nz4hy"/><path class="k04qs_b8d"/></g>`,
		"fallback": "iconmind:confetti-outline-bold",
	});
}

export default Component;
