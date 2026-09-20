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
		"content": `<style>.bbxz-u7vo {
  d: path("M16 6a6 6 0 0 1 0 12");
}

.ht74g2xqg {
  d: path("M6 20A6 6 0 0 1 6 8a4 4 0 0 1 6 8");
}

.ph1z-dbce {
  d: path("M16 9a3 3 0 0 1 0 6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="ht74g2xqg"/><path class="ph1z-dbce"/><path class="bbxz-u7vo"/></g>`,
		"fallback": "iconmind:hearing-aid-outline-bold",
	});
}

export default Component;
