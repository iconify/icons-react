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
		"content": `<style>.fcnh_acnz {
  d: path("m3 19 2.5 -2.5L8 19l2.5 -2.5L13 19l2.5 -2.5L18 19l2.5 -2.5");
}

.pzm21jb5s {
  d: path("M7 11v5h10v-5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wlpa9-b1f {
  d: path("m5 11 7 -7 7 7");
}
</style><g class="s0phu2bbs"><path class="wlpa9-b1f"/><path class="pzm21jb5s"/><path class="fcnh_acnz"/></g>`,
		"fallback": "iconmind:flood-outline-bold",
	});
}

export default Component;
