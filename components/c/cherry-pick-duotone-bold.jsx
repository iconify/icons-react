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
		"content": `<style>.e030h51ix {
  d: path("M10 17a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.jzeve79sx {
  fill: currentColor;
  d: path("M10 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.lgwvtrh-h {
  fill: currentColor;
  d: path("M17 17a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.pn-mm5bcv {
  d: path("M17 17a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tla8vyn6c {
  d: path("M12 7v8");
}

.wkdxs5b7w {
  fill: currentColor;
  d: path("M3 17a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.woeos_2de {
  fill: currentColor;
  d: path("M10 17a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.x5llwmzwn {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 7v8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ymw3aibdo {
  d: path("M10 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.z43nfgbva {
  d: path("M3 17a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="s0phu2bbs"><path class="wkdxs5b7w"/><path class="woeos_2de"/><path class="lgwvtrh-h"/><path class="jzeve79sx"/><path class="x5llwmzwn"/><path class="z43nfgbva"/><path class="e030h51ix"/><path class="pn-mm5bcv"/><path class="ymw3aibdo"/><path class="tla8vyn6c"/></g>`,
		"fallback": "iconmind:cherry-pick-duotone-bold",
	});
}

export default Component;
