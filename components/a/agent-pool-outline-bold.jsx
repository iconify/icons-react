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
		"content": `<style>.gsa3wh0sx {
  d: path("M17.77 4.78a3 3 0 1 1 -2.54 0");
}

.quu8uycwi {
  d: path("M3 14v5h18v-5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.xyeuuzvcq {
  d: path("M8.77 4.78a3 3 0 1 1 -2.54 0");
}
</style><g class="s0phu2bbs"><path class="xyeuuzvcq"/><path class="gsa3wh0sx"/><path class="quu8uycwi"/></g>`,
		"fallback": "iconmind:agent-pool-outline-bold",
	});
}

export default Component;
