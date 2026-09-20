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
		"content": `<style>.aagj9lb5p {
  d: path("m17 13 2 2 3 -3");
}

.lgr612izs {
  d: path("M8 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.n95mv7bdf {
  fill: currentColor;
  d: path("M4 12a5 5 0 1 0 10 0 5 5 0 1 0 -10 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.sdgafkcgw {
  d: path("M4 12a5 5 0 1 0 10 0 5 5 0 1 0 -10 0");
}

.wwnijrnro {
  fill: currentColor;
  d: path("M8 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="n95mv7bdf"/><path class="wwnijrnro"/><path class="sdgafkcgw"/><path class="lgr612izs"/><path class="aagj9lb5p"/></g>`,
		"fallback": "iconmind:goal-met-duotone-bold",
	});
}

export default Component;
