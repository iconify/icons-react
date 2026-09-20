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
		"content": `<style>.ez875nbbx {
  d: path("m2 8 4 -4h12l4 4 -4 4H6Z");
}

.n30k87bda {
  d: path("M5 16a2 2 0 0 0 0 4h14a2 2 0 0 0 0 -4Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="ez875nbbx"/><path class="n30k87bda"/></g>`,
		"fallback": "iconmind:degree-outline-bold",
	});
}

export default Component;
