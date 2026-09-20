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
		"content": `<style>.h9cy72byy {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M11.5 10H14v2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jsnty-baw {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M19.27 3.28a3 3 0 1 1 -2.54 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lhz2jzbtp {
  d: path("M19.27 3.28a3 3 0 1 1 -2.54 0");
}

.pkx_lss1s {
  d: path("m10 14 2.5 -2.5");
}

.r6y10801p {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m10 14 2.5 -2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tr3i0d91k {
  d: path("M11.5 10H14v2.5");
}

.wh0sirbzw {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M7.27 15.28a3 3 0 1 1 -2.54 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zq_pavbka {
  d: path("M7.27 15.28a3 3 0 1 1 -2.54 0");
}
</style><g class="s0phu2bbs"><path class="wh0sirbzw"/><path class="r6y10801p"/><path class="h9cy72byy"/><path class="jsnty-baw"/><path class="zq_pavbka"/><path class="pkx_lss1s"/><path class="tr3i0d91k"/><path class="lhz2jzbtp"/></g>`,
		"fallback": "iconmind:agent-handoff-duotone-bold",
	});
}

export default Component;
