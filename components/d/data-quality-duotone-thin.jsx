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
		"content": `<style>.cv60iqboi {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 12h11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.e3b1-abws {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 18h11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nrqy16b7j {
  d: path("M3 6h11");
}

.o50_pabww {
  d: path("m16 12 2 2 4 -4");
}

.p925lhbvr {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m16 12 2 2 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pvfbz5b4i {
  d: path("M3 18h11");
}

.w95bfobed {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 6h11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.x22av82oi {
  d: path("M3 12h11");
}
</style><g class="hntgybcog"><path class="w95bfobed"/><path class="cv60iqboi"/><path class="e3b1-abws"/><path class="p925lhbvr"/><path class="nrqy16b7j"/><path class="x22av82oi"/><path class="pvfbz5b4i"/><path class="o50_pabww"/></g>`,
		"fallback": "iconmind:data-quality-duotone-thin",
	});
}

export default Component;
