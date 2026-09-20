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
		"content": `<style>.ft9v8faua {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m10 14 2.5 -2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.g8joi956b {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M19.27 3.28a3 3 0 1 1 -2.54 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hcafpwgbt {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M7.27 15.28a3 3 0 1 1 -2.54 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lhz2jzbtp {
  d: path("M19.27 3.28a3 3 0 1 1 -2.54 0");
}

.n0ddfbbqf {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M11.5 10H14v2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
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
</style><g class="nrj6p8qat"><path class="hcafpwgbt"/><path class="ft9v8faua"/><path class="n0ddfbbqf"/><path class="g8joi956b"/><path class="zq_pavbka"/><path class="pkx_lss1s"/><path class="tr3i0d91k"/><path class="lhz2jzbtp"/></g>`,
		"fallback": "iconmind:agent-handoff-duotone-regular",
	});
}

export default Component;
