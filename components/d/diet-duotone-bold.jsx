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
		"content": `<style>.j9nys0arh {
  d: path("M8 15c0 -4 3 -7 8 -7 0 5 -3 8 -8 7");
}

.o_ssmh9ez {
  d: path("M3 12a9 9 0 1 0 18 0 9 9 0 1 0 -18 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.sidtuqbtv {
  fill: currentColor;
  d: path("M8 15c0 -4 3 -7 8 -7 0 5 -3 8 -8 7");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.zhy5nnbig {
  fill: currentColor;
  d: path("M3 12a9 9 0 1 0 18 0 9 9 0 1 0 -18 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="zhy5nnbig"/><path class="sidtuqbtv"/><path class="o_ssmh9ez"/><path class="j9nys0arh"/></g>`,
		"fallback": "iconmind:diet-duotone-bold",
	});
}

export default Component;
