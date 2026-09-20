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
		"content": `<style>.lh_8lcb-x {
  d: path("M12 4v6");
}

.lhk-ji-wo {
  d: path("M5 12v8h14v-8Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t407nkbfi {
  d: path("m9 7 3 -3 3 3");
}
</style><g class="s0phu2bbs"><path class="lhk-ji-wo"/><path class="lh_8lcb-x"/><path class="t407nkbfi"/></g>`,
		"fallback": "iconmind:declutter-outline-bold",
	});
}

export default Component;
