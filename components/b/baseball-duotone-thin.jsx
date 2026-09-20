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

.ljkpzwb2z {
  d: path("M7 4c3 4 3 12 0 16");
}

.o_ssmh9ez {
  d: path("M3 12a9 9 0 1 0 18 0 9 9 0 1 0 -18 0");
}

.q5fe3ibge {
  d: path("M17 4c-3 4 -3 12 0 16");
}

.zhy5nnbig {
  fill: currentColor;
  d: path("M3 12a9 9 0 1 0 18 0 9 9 0 1 0 -18 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="zhy5nnbig"/><path class="o_ssmh9ez"/><path class="ljkpzwb2z"/><path class="q5fe3ibge"/></g>`,
		"fallback": "iconmind:baseball-duotone-thin",
	});
}

export default Component;
