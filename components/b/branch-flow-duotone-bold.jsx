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
		"content": `<style>.m4ozbdcmd {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m9 12 5 5h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.q9br621tu {
  d: path("m9 12 5 5h8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t2gh3_3yj {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 12h7l5 -5h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.uol1biies {
  d: path("M2 12h7l5 -5h8");
}
</style><g class="s0phu2bbs"><path class="t2gh3_3yj"/><path class="m4ozbdcmd"/><path class="uol1biies"/><path class="q9br621tu"/></g>`,
		"fallback": "iconmind:branch-flow-duotone-bold",
	});
}

export default Component;
