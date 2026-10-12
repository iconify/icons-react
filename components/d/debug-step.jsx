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
		"content": `<style>.ffzadgbho {
  d: path("M3.75 18.25h3.5m9.5 0h3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.juap84dhf {
  cx: 12px;
  cy: 18.25px;
  r: 2.25px;
}

.nm008x03r {
  d: path("M5 12.5a7 7 0 0 1 14 0m-2.25-2.25L19 12.5l2.25-2.25");
}
</style><g class="hntgybcog"><path class="nm008x03r"/><circle class="juap84dhf"/><path class="ffzadgbho"/></g>`,
		"fallback": "iconoven:debug-step",
	});
}

export default Component;
