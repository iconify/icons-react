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
		"content": `<style>.du3agkbjb {
  d: path("M5 18a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.objyy5b5b {
  d: path("M17 9v6");
}

.r2dk7difb {
  d: path("M14 12h6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tt7ypiikb {
  d: path("M5 6a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.zgod0v2rr {
  d: path("M7 8.5v7");
}
</style><g class="s0phu2bbs"><path class="tt7ypiikb"/><path class="zgod0v2rr"/><path class="du3agkbjb"/><path class="objyy5b5b"/><path class="r2dk7difb"/></g>`,
		"fallback": "iconmind:git-branch-add-outline-bold",
	});
}

export default Component;
