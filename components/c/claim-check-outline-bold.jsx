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
		"content": `<style>.ihzr3_bny {
  d: path("M8 16a2 2 0 0 1 2 -2h9a2 2 0 0 1 2 2v2.5a2 2 0 0 1 -2 2h-9a2 2 0 0 1 -2 -2Z");
}

.m7enui17k {
  d: path("M3 4h8l3 3 -3 3H3Z");
}

.nnfdo4bja {
  d: path("M5 7a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="m7enui17k"/><path class="nnfdo4bja"/><path class="ihzr3_bny"/></g>`,
		"fallback": "iconmind:claim-check-outline-bold",
	});
}

export default Component;
