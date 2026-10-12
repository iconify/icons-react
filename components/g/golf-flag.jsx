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
		"content": `<style>.be_8csijw {
  d: path("M9 18.25v-15m.68.31l5.89 2.63q.68.31 0 .62L9.68 9.44Q9 9.75 9 9V4q0-.75.68-.44M3.25 18.25C3.25 17.01 5.82 16 9 16s5.75 1.01 5.75 2.25S12.18 20.5 9 20.5s-5.75-1.01-5.75-2.25");
}

.fx05sjbwb {
  cx: 18.5px;
  cy: 18.25px;
  r: 1.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="be_8csijw"/><circle class="fx05sjbwb"/></g>`,
		"fallback": "iconoven:golf-flag",
	});
}

export default Component;
