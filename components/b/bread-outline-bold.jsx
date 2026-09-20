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
		"content": `<style>.aszec0xzq {
  d: path("m9 11 2 -2");
}

.o22a_hbrn {
  d: path("m13 11 2 -2");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t6bqz9mcc {
  d: path("M4 20v-7c0 -4 3 -6 8 -6s8 2 8 6v7Z");
}
</style><g class="s0phu2bbs"><path class="t6bqz9mcc"/><path class="aszec0xzq"/><path class="o22a_hbrn"/></g>`,
		"fallback": "iconmind:bread-outline-bold",
	});
}

export default Component;
