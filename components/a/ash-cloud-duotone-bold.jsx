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
		"content": `<style>.kt0pn2q8p {
  fill: currentColor;
  d: path("M4 12a3.5 3.5 0 0 1 2 -6.5 4.5 4.5 0 0 1 8.5 -1A5 5 0 0 1 18 12Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.mwsvi3abz {
  d: path("m5 21 7 -7 7 7Z");
}

.p2xzsobqz {
  fill: currentColor;
  d: path("m5 21 7 -7 7 7Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
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
</style><g class="s0phu2bbs"><path class="kt0pn2q8p"/><path class="p2xzsobqz"/><path class="u7jotynzh"/><path class="mwsvi3abz"/></g>`,
		"fallback": "iconmind:ash-cloud-duotone-bold",
	});
}

export default Component;
