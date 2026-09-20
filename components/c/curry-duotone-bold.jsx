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
		"content": `<style>.d_xtg74gy {
  d: path("M15 10a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.pr270rb6e {
  fill: currentColor;
  d: path("M15 10a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.qgqx27bzk {
  d: path("M4 13a4 4 0 0 1 8 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t28ya7bja {
  fill: currentColor;
  d: path("M2 13h20c0 4 -4 7 -10 7S2 17 2 13");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.vr3sgacxq {
  d: path("M2 13h20c0 4 -4 7 -10 7S2 17 2 13");
}
</style><g class="s0phu2bbs"><path class="t28ya7bja"/><path class="pr270rb6e"/><path class="vr3sgacxq"/><path class="qgqx27bzk"/><path class="d_xtg74gy"/></g>`,
		"fallback": "iconmind:curry-duotone-bold",
	});
}

export default Component;
