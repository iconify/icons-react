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
		"content": `<style>.erreycbys {
  d: path("m12 13 5 -5");
}

.pc9haabcx {
  d: path("M5 13a7 7 0 1 0 14 0 7 7 0 1 0 -14 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.syzpzeigb {
  d: path("m15 4 5 5");
}

.yfuyijbwt {
  fill: currentColor;
  d: path("M5 13a7 7 0 1 0 14 0 7 7 0 1 0 -14 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="yfuyijbwt"/><path class="pc9haabcx"/><path class="erreycbys"/><path class="syzpzeigb"/></g>`,
		"fallback": "iconmind:cadence-duotone-bold",
	});
}

export default Component;
