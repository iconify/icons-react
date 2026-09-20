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
		"content": `<style>.bkx9mvb8q {
  d: path("M14 20v-7h8v7Z");
}

.c744qo9dt {
  d: path("M16 13v-3h4v3");
}

.fqjewfbna {
  d: path("M2 16a4 4 0 0 1 8 0");
}

.k74vnib1e {
  d: path("M3 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="k74vnib1e"/><path class="fqjewfbna"/><path class="bkx9mvb8q"/><path class="c744qo9dt"/></g>`,
		"fallback": "iconmind:handyman-outline-bold",
	});
}

export default Component;
