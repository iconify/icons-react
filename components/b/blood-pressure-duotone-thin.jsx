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
		"content": `<style>.bhkpzybsm {
  d: path("M2 8a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.cqvq03bab {
  fill: currentColor;
  d: path("M14 15a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.dgzuelb_e {
  d: path("M2 11h12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sebrrz16i {
  d: path("M14 15a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.vvp13uh-r {
  fill: currentColor;
  d: path("M2 8a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.z9ywnzvgb {
  d: path("M18 12v3h3");
}
</style><g class="hntgybcog"><path class="vvp13uh-r"/><path class="cqvq03bab"/><path class="bhkpzybsm"/><path class="dgzuelb_e"/><path class="sebrrz16i"/><path class="z9ywnzvgb"/></g>`,
		"fallback": "iconmind:blood-pressure-duotone-thin",
	});
}

export default Component;
