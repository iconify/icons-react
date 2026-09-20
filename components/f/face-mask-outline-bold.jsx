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
		"content": `<style>.gqwusxz8h {
  d: path("M3 12h18v3a12 12 0 0 1 -18 0Z");
}

.mbifgmx_w {
  d: path("M3 12V8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tp86gnbwd {
  d: path("M21 12V8");
}

.yoftwf7ei {
  d: path("M6 9a6 6 0 1 0 12 0A6 6 0 1 0 6 9");
}
</style><g class="s0phu2bbs"><path class="yoftwf7ei"/><path class="gqwusxz8h"/><path class="mbifgmx_w"/><path class="tp86gnbwd"/></g>`,
		"fallback": "iconmind:face-mask-outline-bold",
	});
}

export default Component;
