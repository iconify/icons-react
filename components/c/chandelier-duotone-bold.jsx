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
		"content": `<style>.fnf6pdbdu {
  d: path("M12 3v6");
}

.j7bay-umk {
  d: path("M18 17a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.jpcl7o5sc {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 3v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kywqclbap {
  fill: currentColor;
  d: path("M18 17a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.mnz_50noh {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 16c0 -5 4 -7 8 -7s8 2 8 7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.n2663rn1y {
  fill: currentColor;
  d: path("M2 17a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ofbkge5tm {
  d: path("M2 17a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.prhskmb-v {
  d: path("M4 16c0 -5 4 -7 8 -7s8 2 8 7");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="n2663rn1y"/><path class="kywqclbap"/><path class="jpcl7o5sc"/><path class="mnz_50noh"/><path class="fnf6pdbdu"/><path class="prhskmb-v"/><path class="ofbkge5tm"/><path class="j7bay-umk"/></g>`,
		"fallback": "iconmind:chandelier-duotone-bold",
	});
}

export default Component;
