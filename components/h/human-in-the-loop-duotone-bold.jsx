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
		"content": `<style>.b_e_avbfy {
  d: path("M7 19a5 5 0 0 1 10 0");
}

.e69i7fcek {
  d: path("M17 12h5");
}

.l8unaacgj {
  d: path("M2 12h5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tzdfp4-do {
  fill: currentColor;
  d: path("M9 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ufzn_r3vk {
  d: path("M9 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="s0phu2bbs"><path class="tzdfp4-do"/><path class="l8unaacgj"/><path class="ufzn_r3vk"/><path class="b_e_avbfy"/><path class="e69i7fcek"/></g>`,
		"fallback": "iconmind:human-in-the-loop-duotone-bold",
	});
}

export default Component;
