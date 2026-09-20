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
		"content": `<style>.cy34vrbps {
  d: path("M10 8.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.ooykrqbbx {
  d: path("M3 13v7h7v-7");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t3p_xpene {
  d: path("M14 13v7h7v-7");
}

.ufignx6hm {
  d: path("M15.5 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.zf7mx_7mn {
  d: path("M4.5 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="s0phu2bbs"><path class="zf7mx_7mn"/><path class="ufignx6hm"/><path class="cy34vrbps"/><path class="ooykrqbbx"/><path class="t3p_xpene"/></g>`,
		"fallback": "iconmind:bucket-data-outline-bold",
	});
}

export default Component;
