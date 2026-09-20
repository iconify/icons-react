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
		"content": `<style>.g-g6w6buq {
  d: path("M7 11a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.maf2tbbex {
  d: path("M15 4h6v14h-6Z");
}

.me7c_bbry {
  d: path("M15 11a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.oqfv9rb9x {
  d: path("M2 21h20");
}

.oviqrkboq {
  d: path("M3 4h6v14H3Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="oviqrkboq"/><path class="maf2tbbex"/><path class="oqfv9rb9x"/><path class="g-g6w6buq"/><path class="me7c_bbry"/></g>`,
		"fallback": "iconmind:hallway-outline-bold",
	});
}

export default Component;
