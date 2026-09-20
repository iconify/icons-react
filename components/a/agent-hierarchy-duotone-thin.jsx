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
		"content": `<style>.cc0pq4b_o {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 12h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ge09r9wra {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 12v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i2i_szzgu {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M18 12v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrfcflbzs {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M7.27 15.28a3 3 0 1 1 -2.54 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ntt8cbcqj {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 8v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pfpu_3ppl {
  d: path("M12 8v4");
}

.qk4l-ab-s {
  d: path("M13.27 2.28a3 3 0 1 1 -2.54 0");
}

.qooj3fbsi {
  d: path("M6 12v3");
}

.vslz5yb3q {
  d: path("M6 12h12");
}

.wu-aokb4s {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M19.27 15.28a3 3 0 1 1 -2.54 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xb0ugqbkt {
  d: path("M19.27 15.28a3 3 0 1 1 -2.54 0");
}

.xkgd5c3pc {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M13.27 2.28a3 3 0 1 1 -2.54 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zn_a46_dj {
  d: path("M18 12v3");
}

.zq_pavbka {
  d: path("M7.27 15.28a3 3 0 1 1 -2.54 0");
}
</style><g class="hntgybcog"><path class="xkgd5c3pc"/><path class="ntt8cbcqj"/><path class="cc0pq4b_o"/><path class="nrfcflbzs"/><path class="wu-aokb4s"/><path class="ge09r9wra"/><path class="i2i_szzgu"/><path class="qk4l-ab-s"/><path class="pfpu_3ppl"/><path class="vslz5yb3q"/><path class="zq_pavbka"/><path class="xb0ugqbkt"/><path class="qooj3fbsi"/><path class="zn_a46_dj"/></g>`,
		"fallback": "iconmind:agent-hierarchy-duotone-thin",
	});
}

export default Component;
