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
		"content": `<style>.cxgftibra {
  d: path("m12 10 2 2 -2 2");
}

.hxtix3e9b {
  d: path("M15 6v11h6V6");
}

.rzt8fd71i {
  d: path("M2 6h8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vezq7pbcc {
  d: path("M3 6v11h6V6");
}

.y0y0ccsoe {
  d: path("M10 12h4");
}

.ymhuvfz3p {
  d: path("M14 6h8");
}
</style><g class="s0phu2bbs"><path class="rzt8fd71i"/><path class="vezq7pbcc"/><path class="ymhuvfz3p"/><path class="hxtix3e9b"/><path class="y0y0ccsoe"/><path class="cxgftibra"/></g>`,
		"fallback": "iconmind:chemical-reaction-outline-bold",
	});
}

export default Component;
