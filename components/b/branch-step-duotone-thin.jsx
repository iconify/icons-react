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
		"content": `<style>.chml-dbhf {
  d: path("M12.5 14.5 19 21");
}

.e8v7ax2lp {
  fill: currentColor;
  d: path("M5 12a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j1j4yzvdj {
  d: path("M5 12a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.k4_bwgbwn {
  d: path("M12.5 9.5 19 3");
}
</style><g class="hntgybcog"><path class="e8v7ax2lp"/><path class="j1j4yzvdj"/><path class="k4_bwgbwn"/><path class="chml-dbhf"/></g>`,
		"fallback": "iconmind:branch-step-duotone-thin",
	});
}

export default Component;
