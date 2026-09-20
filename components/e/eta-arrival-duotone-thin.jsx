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
		"content": `<style>.gr0pfvalr {
  d: path("M9 10a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mhnr27bap {
  d: path("M12 7v3");
}

.p67gkiiyp {
  fill: currentColor;
  d: path("M4 10a8 8 0 0 1 16 0l-8 8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.qad3kqbgr {
  d: path("M4 10a8 8 0 0 1 16 0l-8 8Z");
}

.r1yty139d {
  fill: currentColor;
  d: path("M9 10a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.uj789o2td {
  d: path("M12 10h2.5");
}
</style><g class="hntgybcog"><path class="p67gkiiyp"/><path class="r1yty139d"/><path class="qad3kqbgr"/><path class="gr0pfvalr"/><path class="mhnr27bap"/><path class="uj789o2td"/></g>`,
		"fallback": "iconmind:eta-arrival-duotone-thin",
	});
}

export default Component;
