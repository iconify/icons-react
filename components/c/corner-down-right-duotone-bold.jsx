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
		"content": `<style>.aqo7xjbdx {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 4v10h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.isvgtub8p {
  d: path("M4 4v10h16");
}

.lkcoizwse {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m15 9 5 5 -5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.xpi-ctm3k {
  d: path("m15 9 5 5 -5 5");
}
</style><g class="s0phu2bbs"><path class="aqo7xjbdx"/><path class="lkcoizwse"/><path class="isvgtub8p"/><path class="xpi-ctm3k"/></g>`,
		"fallback": "iconmind:corner-down-right-duotone-bold",
	});
}

export default Component;
