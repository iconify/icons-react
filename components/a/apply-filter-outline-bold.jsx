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
		"content": `<style>.ckcr2acsn {
  d: path("m10 16 2 2 2 -2");
}

.jgnf7sbfg {
  d: path("m10 19 2 2 2 -2");
}

.mjze8rg7o {
  d: path("M9 2.5H3l7 7V12h4V9.5l7 -7h-6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="mjze8rg7o"/><path class="ckcr2acsn"/><path class="jgnf7sbfg"/></g>`,
		"fallback": "iconmind:apply-filter-outline-bold",
	});
}

export default Component;
