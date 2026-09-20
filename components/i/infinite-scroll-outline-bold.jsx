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
		"content": `<style>.ephqv81ta {
  d: path("m9.5 14 2.5 2.5 2.5 -2.5");
}

.k6nj2fbya {
  d: path("M3 5h18");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.x50q_4bdr {
  d: path("M3 10h18");
}

.zrtfv65fm {
  d: path("M9.5 18.5 12 21l2.5 -2.5");
}
</style><g class="s0phu2bbs"><path class="k6nj2fbya"/><path class="x50q_4bdr"/><path class="ephqv81ta"/><path class="zrtfv65fm"/></g>`,
		"fallback": "iconmind:infinite-scroll-outline-bold",
	});
}

export default Component;
