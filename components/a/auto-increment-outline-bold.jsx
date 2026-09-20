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
		"content": `<style>.d0oey7bgo {
  d: path("m14 11 3 -3 3 3");
}

.gb3i0xbuh {
  d: path("M5 12h7");
}

.k1llj9blt {
  d: path("M17 8v8");
}

.murw5tb-p {
  d: path("M2 9a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="murw5tb-p"/><path class="gb3i0xbuh"/><path class="d0oey7bgo"/><path class="k1llj9blt"/></g>`,
		"fallback": "iconmind:auto-increment-outline-bold",
	});
}

export default Component;
