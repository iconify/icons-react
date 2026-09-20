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
		"content": `<style>.kcvg8_brd {
  d: path("m8 7 2.5 2.5a2.5 2.5 0 0 1 -5 0Z");
}

.riqqdm93h {
  d: path("m15 11 2.5 2.5a2.5 2.5 0 0 1 -5 0Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wnk6eob9l {
  d: path("m11 16 2.5 2.5a2.5 2.5 0 0 1 -5 0Z");
}
</style><g class="s0phu2bbs"><path class="kcvg8_brd"/><path class="riqqdm93h"/><path class="wnk6eob9l"/></g>`,
		"fallback": "iconmind:humidity-high-outline-bold",
	});
}

export default Component;
