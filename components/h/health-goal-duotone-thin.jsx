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

.o_ssmh9ez {
  d: path("M3 12a9 9 0 1 0 18 0 9 9 0 1 0 -18 0");
}

.uex10_blh {
  fill: currentColor;
  d: path("M7 10a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0l-5 5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.xb58eebme {
  d: path("M7 10a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0l-5 5Z");
}

.zhy5nnbig {
  fill: currentColor;
  d: path("M3 12a9 9 0 1 0 18 0 9 9 0 1 0 -18 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="zhy5nnbig"/><path class="uex10_blh"/><path class="o_ssmh9ez"/><path class="xb58eebme"/></g>`,
		"fallback": "iconmind:health-goal-duotone-thin",
	});
}

export default Component;
