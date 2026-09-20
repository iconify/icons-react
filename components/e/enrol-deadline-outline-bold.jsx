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
		"content": `<style>.cu26jmb_i {
  d: path("M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.j835zw5-z {
  d: path("M3 9h18");
}

.ldha4ac1c {
  d: path("M13 12v3h3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.yc_i1qanr {
  d: path("M10 15a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="s0phu2bbs"><path class="cu26jmb_i"/><path class="j835zw5-z"/><path class="yc_i1qanr"/><path class="ldha4ac1c"/></g>`,
		"fallback": "iconmind:enrol-deadline-outline-bold",
	});
}

export default Component;
