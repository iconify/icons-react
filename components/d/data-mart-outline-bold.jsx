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
		"content": `<style>.kis90s73d {
  d: path("M9 15h12");
}

.ps0de6bda {
  d: path("M9 10h12");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t87ohzbeq {
  d: path("M9 4v16");
}

.zrwkhybyf {
  d: path("M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}
</style><g class="s0phu2bbs"><path class="zrwkhybyf"/><path class="t87ohzbeq"/><path class="ps0de6bda"/><path class="kis90s73d"/></g>`,
		"fallback": "iconmind:data-mart-outline-bold",
	});
}

export default Component;
