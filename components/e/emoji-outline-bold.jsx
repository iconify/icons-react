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
		"content": `<style>.dy-bj6bwq {
  d: path("M14 10a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.nzpsuduik {
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.u84sg0ngq {
  d: path("M8 10a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.zagl7tvsj {
  d: path("M14.83 15.83a4 4 0 0 1 -5.66 0");
}
</style><g class="s0phu2bbs"><path class="nzpsuduik"/><path class="u84sg0ngq"/><path class="dy-bj6bwq"/><path class="zagl7tvsj"/></g>`,
		"fallback": "iconmind:emoji-outline-bold",
	});
}

export default Component;
