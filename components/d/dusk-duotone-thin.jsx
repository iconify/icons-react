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
		"content": `<style>.bnhdslb0j {
  d: path("M19 8v6");
}

.euvekjzkt {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M19 8v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ior14cbcm {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 19h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.k15q4tbdt {
  d: path("M6 19a6 6 0 0 1 12 0");
}

.kyf663bil {
  d: path("M16.5 11.5 19 14l2.5 -2.5");
}

.xtqbfpzcr {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 19a6 6 0 0 1 12 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.z9ittvbis {
  d: path("M2 19h20");
}

.zmdi3vj7x {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M16.5 11.5 19 14l2.5 -2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="xtqbfpzcr"/><path class="ior14cbcm"/><path class="euvekjzkt"/><path class="zmdi3vj7x"/><path class="k15q4tbdt"/><path class="z9ittvbis"/><path class="bnhdslb0j"/><path class="kyf663bil"/></g>`,
		"fallback": "iconmind:dusk-duotone-thin",
	});
}

export default Component;
