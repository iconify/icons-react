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
		"content": `<style>.c-hbuyb5n {
  d: path("M4 7c1.5 2 3.5 2 5 0 1.5 2 3.5 2 5 0 1.5 2 3.5 2 5 0");
}

.mc1omvbiw {
  d: path("M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v13a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.n-7t0yb1r {
  d: path("M3 13h18");
}

.n887hrq4r {
  d: path("M7 17h6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="mc1omvbiw"/><path class="c-hbuyb5n"/><path class="n-7t0yb1r"/><path class="n887hrq4r"/></g>`,
		"fallback": "iconmind:event-calendar-outline-bold",
	});
}

export default Component;
