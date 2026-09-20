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
		"content": `<style>.isvgtub8p {
  d: path("M4 4v10h16");
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
</style><g class="s0phu2bbs"><path class="isvgtub8p"/><path class="xpi-ctm3k"/></g>`,
		"fallback": "iconmind:corner-down-right-outline-bold",
	});
}

export default Component;
