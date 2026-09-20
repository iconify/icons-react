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
		"content": `<style>.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.sl0tqnboi {
  d: path("M4 12a6 6 0 1 0 12 0 6 6 0 1 0 -12 0");
}

.vrzeiketi {
  d: path("m16 15 2 2 4 -4");
}

.yf0ac-1wm {
  d: path("M10 9v3h3");
}
</style><g class="s0phu2bbs"><path class="sl0tqnboi"/><path class="yf0ac-1wm"/><path class="vrzeiketi"/></g>`,
		"fallback": "iconmind:freshness-check-outline-bold",
	});
}

export default Component;
