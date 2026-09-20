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
		"content": `<style>.d-a_pubdj {
  d: path("M18 4v8");
}

.nziq0gact {
  d: path("M15 12h6v4h-6Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.txxjjstdk {
  d: path("M2 11h10c-0.5 4 -2 7 -3 10H5c-1 -3 -2.5 -6 -3 -10");
}
</style><g class="s0phu2bbs"><path class="txxjjstdk"/><path class="d-a_pubdj"/><path class="nziq0gact"/></g>`,
		"fallback": "iconmind:dustpan-outline-bold",
	});
}

export default Component;
