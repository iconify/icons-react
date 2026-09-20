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
		"content": `<style>.cvr9mcbfs {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M19.27 3.28a3 3 0 1 1 -2.54 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fjehl4tkv {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m10 14 2.5 -2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ivmzqpb5e {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M11.5 10H14v2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lhz2jzbtp {
  d: path("M19.27 3.28a3 3 0 1 1 -2.54 0");
}

.nrfcflbzs {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M7.27 15.28a3 3 0 1 1 -2.54 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pkx_lss1s {
  d: path("m10 14 2.5 -2.5");
}

.tr3i0d91k {
  d: path("M11.5 10H14v2.5");
}

.zq_pavbka {
  d: path("M7.27 15.28a3 3 0 1 1 -2.54 0");
}
</style><g class="hntgybcog"><path class="nrfcflbzs"/><path class="fjehl4tkv"/><path class="ivmzqpb5e"/><path class="cvr9mcbfs"/><path class="zq_pavbka"/><path class="pkx_lss1s"/><path class="tr3i0d91k"/><path class="lhz2jzbtp"/></g>`,
		"fallback": "iconmind:agent-handoff-duotone-thin",
	});
}

export default Component;
