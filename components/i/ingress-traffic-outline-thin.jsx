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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l_9_psbce {
  d: path("M21 6v12");
}

.m1k1s7nte {
  d: path("M10 12h10");
}

.mi_m6achy {
  d: path("m17 9 3 3 -3 3");
}

.yvotc3bin {
  d: path("M8 3H3v18h5");
}
</style><g class="hntgybcog"><path class="yvotc3bin"/><path class="m1k1s7nte"/><path class="mi_m6achy"/><path class="l_9_psbce"/></g>`,
		"fallback": "iconmind:ingress-traffic-outline-thin",
	});
}

export default Component;
