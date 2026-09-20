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
		"content": `<style>.n-7t0yb1r {
  d: path("M3 13h18");
}

.nutam6ble {
  d: path("M17 7a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.nyba_zpqc {
  d: path("M3 8h11");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.xyj-l9cjp {
  d: path("M3 18h18");
}
</style><g class="s0phu2bbs"><path class="nyba_zpqc"/><path class="nutam6ble"/><path class="n-7t0yb1r"/><path class="xyj-l9cjp"/></g>`,
		"fallback": "iconmind:cite-sources-outline-bold",
	});
}

export default Component;
