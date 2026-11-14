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
		"content": `<style>.ay28vsbzn {
  d: path("M12.75 11a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wkererbov {
  d: path("M6 7h8.5a3.5 3.5 0 0 1 3.5 3.5V17a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 17v-6.5A3.5 3.5 0 0 1 6 7");
}

.zrco9wvof {
  d: path("M6.5 7V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H18M2.5 17.75l5-5l4 4L13.75 15L18 18.25");
}
</style><g class="hntgybcog"><path class="wkererbov"/><path class="zrco9wvof"/><path class="ay28vsbzn"/></g>`,
		"fallback": "uix:depth-photo",
	});
}

export default Component;
