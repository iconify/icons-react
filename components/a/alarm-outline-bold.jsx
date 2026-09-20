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
		"content": `<style>.md_wm9bov {
  d: path("m3 6 3 -3");
}

.n7tvrlb7x {
  d: path("m21 6 -3 -3");
}

.nqda50bqs {
  d: path("M4 13a8 8 0 1 0 16 0 8 8 0 1 0 -16 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wsg9rhonx {
  d: path("M12 8v5h4");
}
</style><g class="s0phu2bbs"><path class="nqda50bqs"/><path class="wsg9rhonx"/><path class="md_wm9bov"/><path class="n7tvrlb7x"/></g>`,
		"fallback": "iconmind:alarm-outline-bold",
	});
}

export default Component;
