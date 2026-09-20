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
		"content": `<style>.mwsvi3abz {
  d: path("m5 21 7 -7 7 7Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.u7jotynzh {
  d: path("M4 12a3.5 3.5 0 0 1 2 -6.5 4.5 4.5 0 0 1 8.5 -1A5 5 0 0 1 18 12Z");
}
</style><g class="s0phu2bbs"><path class="u7jotynzh"/><path class="mwsvi3abz"/></g>`,
		"fallback": "iconmind:ash-cloud-outline-bold",
	});
}

export default Component;
