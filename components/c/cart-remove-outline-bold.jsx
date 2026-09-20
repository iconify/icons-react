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
		"content": `<style>.bpciasb2z {
  d: path("M3 5.5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.c11_n0b6s {
  d: path("M6.5 19.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.f9z-0cczq {
  d: path("M9 10.5h6");
}

.k3juqlbuw {
  d: path("M15.5 19.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="bpciasb2z"/><path class="c11_n0b6s"/><path class="k3juqlbuw"/><path class="f9z-0cczq"/></g>`,
		"fallback": "iconmind:cart-remove-outline-bold",
	});
}

export default Component;
