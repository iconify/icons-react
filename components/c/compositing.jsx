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
		"content": `<style>.arcn7idar {
  d: path("M9.125 7h5.75A2.625 2.625 0 0 1 17.5 9.625v2.75A2.625 2.625 0 0 1 14.875 15h-5.75A2.625 2.625 0 0 1 6.5 12.375v-2.75A2.625 2.625 0 0 1 9.125 7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.slfrgobzu {
  d: path("M6.5 10.5H4A1.5 1.5 0 0 1 2.5 9V4A1.5 1.5 0 0 1 4 2.5h8A1.5 1.5 0 0 1 13.5 4v3");
}

.x025m1wkr {
  d: path("M13.125 11.5h5.75a2.625 2.625 0 0 1 2.625 2.625v2.75a2.625 2.625 0 0 1-2.625 2.625h-5.75a2.625 2.625 0 0 1-2.625-2.625v-2.75a2.625 2.625 0 0 1 2.625-2.625");
}
</style><g class="hntgybcog"><path class="slfrgobzu"/><path class="arcn7idar"/><path class="x025m1wkr"/></g>`,
		"fallback": "uix:compositing",
	});
}

export default Component;
