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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.huf6y2b8y {
  d: path("M5.25 20.5L6 8h12l.75 12.5");
}

.obdaw0b_v {
  d: path("M8.75 15.25a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0");
}

.pc6ywjqim {
  d: path("M2.5 20.5v-16h19v16");
}
</style><g class="hntgybcog"><path class="pc6ywjqim"/><path class="huf6y2b8y"/><path class="obdaw0b_v"/></g>`,
		"fallback": "uix:goal-scored",
	});
}

export default Component;
