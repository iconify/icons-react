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
		"content": `<style>.p8527rbyx {
  d: path("m7 15 4 4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wy_ebz_tz {
  d: path("M5 17 15 7l4 4L9 21Z");
}
</style><g class="s0phu2bbs"><path class="wy_ebz_tz"/><path class="p8527rbyx"/></g>`,
		"fallback": "iconmind:chalk-outline-bold",
	});
}

export default Component;
