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
		"content": `<style>.d5yu6lbvq {
  d: path("M4 14h9");
}

.inp0fub_p {
  d: path("M2 6a2 2 0 0 1 2 -2h9a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.l8vricc3a {
  d: path("M17 10h4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pkt304bvs {
  d: path("M19 8v4");
}

.rh_i50bzs {
  d: path("M4 9h9");
}

.rjbfcabog {
  d: path("M17 16h4");
}

.x5beyjd8g {
  fill: currentColor;
  d: path("M2 6a2 2 0 0 1 2 -2h9a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="x5beyjd8g"/><path class="inp0fub_p"/><path class="rh_i50bzs"/><path class="d5yu6lbvq"/><path class="pkt304bvs"/><path class="l8vricc3a"/><path class="rjbfcabog"/></g>`,
		"fallback": "iconmind:enrich-duotone-regular",
	});
}

export default Component;
