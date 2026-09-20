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
		"content": `<style>.p367mshbv {
  d: path("M5.5 10a6.5 6.5 0 1 0 13 0 6.5 6.5 0 1 0 -13 0");
}

.rseiusb3q {
  d: path("M16.5 14.5 21 19");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wiqtzw0bm {
  d: path("M10 7h4v6l-2 -2 -2 2Z");
}
</style><g class="s0phu2bbs"><path class="p367mshbv"/><path class="rseiusb3q"/><path class="wiqtzw0bm"/></g>`,
		"fallback": "iconmind:bookmark-search-outline-bold",
	});
}

export default Component;
