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
		"content": `<style>.pfpu_3ppl {
  d: path("M12 8v4");
}

.qk4l-ab-s {
  d: path("M13.27 2.28a3 3 0 1 1 -2.54 0");
}

.qooj3fbsi {
  d: path("M6 12v3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vslz5yb3q {
  d: path("M6 12h12");
}

.xb0ugqbkt {
  d: path("M19.27 15.28a3 3 0 1 1 -2.54 0");
}

.zn_a46_dj {
  d: path("M18 12v3");
}

.zq_pavbka {
  d: path("M7.27 15.28a3 3 0 1 1 -2.54 0");
}
</style><g class="s0phu2bbs"><path class="qk4l-ab-s"/><path class="pfpu_3ppl"/><path class="vslz5yb3q"/><path class="zq_pavbka"/><path class="xb0ugqbkt"/><path class="qooj3fbsi"/><path class="zn_a46_dj"/></g>`,
		"fallback": "iconmind:agent-hierarchy-outline-bold",
	});
}

export default Component;
