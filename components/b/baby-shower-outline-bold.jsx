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
		"content": `<style>.bbuvl1-kv {
  d: path("M4 13h14");
}

.ew7y79byi {
  d: path("M5 17a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.hr8tx7nsp {
  d: path("m18 13 3 -3");
}

.huj3g_bus {
  d: path("M13 17a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.x02q_d2hh {
  d: path("M4 13a7 7 0 0 1 14 0");
}
</style><g class="s0phu2bbs"><path class="x02q_d2hh"/><path class="bbuvl1-kv"/><path class="hr8tx7nsp"/><path class="ew7y79byi"/><path class="huj3g_bus"/></g>`,
		"fallback": "iconmind:baby-shower-outline-bold",
	});
}

export default Component;
