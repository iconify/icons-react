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
		"content": `<style>.bo88vlbuz {
  d: path("M16 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.fozhwebbv {
  d: path("M10 6a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wc595gblk {
  d: path("M4 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.zpl84_dhy {
  d: path("M12 14c5 0 9 1.5 9 3.5S17 21 12 21s-9 -1.5 -9 -3.5S7 14 12 14");
}
</style><g class="s0phu2bbs"><path class="zpl84_dhy"/><path class="wc595gblk"/><path class="fozhwebbv"/><path class="bo88vlbuz"/></g>`,
		"fallback": "iconmind:get-together-outline-bold",
	});
}

export default Component;
