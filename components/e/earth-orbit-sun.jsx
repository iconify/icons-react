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
		"content": `<style>.fzub09byi {
  d: path("M8.75 12a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0M16 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xmr8p6gfz {
  d: path("M20.25 10.25a8.5 8.5 0 1 1-6.5-6.5");
}
</style><g class="hntgybcog"><path class="xmr8p6gfz"/><path class="fzub09byi"/></g>`,
		"fallback": "uix:earth-orbit-sun",
	});
}

export default Component;
