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
		"content": `<style>.d3l_1r_ju {
  d: path("M3 6.5h18L17.75 12L21 17.5H3L6.25 12Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j_xy01z2i {
  d: path("m12.375 9.875l.068.203a1.5 1.5 0 0 0 1.274 1.019l.386.038a.493.493 0 0 1 .272.865l-.192.164a1.5 1.5 0 0 0-.488 1.465l.055.246a.483.483 0 0 1-.727.514l-.228-.142a1.5 1.5 0 0 0-1.59 0l-.228.142a.483.483 0 0 1-.727-.514l.055-.246a1.5 1.5 0 0 0-.488-1.465L9.625 12a.493.493 0 0 1 .272-.865l.386-.038a1.5 1.5 0 0 0 1.274-1.019l.068-.203a.395.395 0 0 1 .75 0");
}
</style><g class="hntgybcog"><path class="d3l_1r_ju"/><path class="j_xy01z2i"/></g>`,
		"fallback": "uix:banner-celebrate",
	});
}

export default Component;
