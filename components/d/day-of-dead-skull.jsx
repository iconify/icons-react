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

.p7mhp4b_i {
  d: path("M12 2.5a8.5 8.5 0 0 1 8.5 8.5v3.5a2 2 0 0 1-2 2h-2V20a1.5 1.5 0 0 1-1.5 1.5H9A1.5 1.5 0 0 1 7.5 20v-3.5h-2a2 2 0 0 1-2-2V11A8.5 8.5 0 0 1 12 2.5");
}

.to2ax3uhw {
  d: path("M10.75 6a1.25 1.25 0 0 1 2.5 0a1.25 1.25 0 0 1 0 2.5a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 0-2.5m-4.5 6.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m8 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}
</style><g class="hntgybcog"><path class="p7mhp4b_i"/><path class="to2ax3uhw"/></g>`,
		"fallback": "uix:day-of-dead-skull",
	});
}

export default Component;
