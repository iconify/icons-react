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
		"content": `<style>.jqxl7db2x {
  d: path("M4 3h16v17l-8 -8 -8 8Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ttrxo2bov {
  fill: currentColor;
  d: path("M4 3h16v17l-8 -8 -8 8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.tu0fdo1xi {
  d: path("M7 7h10");
}

.uepsd3bvn {
  d: path("M7 10h7");
}
</style><g class="s0phu2bbs"><path class="ttrxo2bov"/><path class="jqxl7db2x"/><path class="tu0fdo1xi"/><path class="uepsd3bvn"/></g>`,
		"fallback": "iconmind:honour-roll-duotone-bold",
	});
}

export default Component;
