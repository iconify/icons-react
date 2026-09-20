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
		"content": `<style>.eu5thqbry {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M21 6v12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gv3gpab3b {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m17 9 3 3 -3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l_9_psbce {
  d: path("M21 6v12");
}

.l_xrh301h {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M8 3H3v18h5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.m1k1s7nte {
  d: path("M10 12h10");
}

.mi_m6achy {
  d: path("m17 9 3 3 -3 3");
}

.s74cfob_f {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M10 12h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yvotc3bin {
  d: path("M8 3H3v18h5");
}
</style><g class="hntgybcog"><path class="l_xrh301h"/><path class="s74cfob_f"/><path class="gv3gpab3b"/><path class="eu5thqbry"/><path class="yvotc3bin"/><path class="m1k1s7nte"/><path class="mi_m6achy"/><path class="l_9_psbce"/></g>`,
		"fallback": "iconmind:ingress-traffic-duotone-thin",
	});
}

export default Component;
