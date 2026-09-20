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
		"content": `<style>.ddr0zpdgr {
  d: path("M8 6a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uih_zvhtv {
  d: path("M4 21h16");
}

.w35n61kja {
  d: path("M8 12h8v6H8Z");
}
</style><g class="s0phu2bbs"><path class="w35n61kja"/><path class="ddr0zpdgr"/><path class="uih_zvhtv"/></g>`,
		"fallback": "iconmind:exhibition-outline-bold",
	});
}

export default Component;
