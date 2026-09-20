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
		"content": `<style>.codbx8bow {
  d: path("M5 18V7h14v11Z");
}

.ffwaozrbk {
  d: path("M10 10h4");
}

.quvbquwsr {
  d: path("M17 18v3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tbcegmb1y {
  d: path("M7 18v3");
}

.y07a50u1t {
  d: path("M5 13h14");
}
</style><g class="s0phu2bbs"><path class="codbx8bow"/><path class="y07a50u1t"/><path class="ffwaozrbk"/><path class="tbcegmb1y"/><path class="quvbquwsr"/></g>`,
		"fallback": "iconmind:bedside-table-outline-bold",
	});
}

export default Component;
