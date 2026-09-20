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
		"content": `<style>.a9p3o_b1a {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M5 20V8h5v12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hsnj9o-9y {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 20h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jkuojibnm {
  d: path("M3 20h18");
}

.kdeocz3_k {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M13 8h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nn2mbucfp {
  d: path("M5 20V8h5v12");
}

.om9c7ck0x {
  d: path("M13 8h7");
}

.t0tr_kbnd {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M14 20v-6h5v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.wwyi7ubez {
  d: path("M14 20v-6h5v6");
}
</style><g class="hntgybcog"><path class="hsnj9o-9y"/><path class="a9p3o_b1a"/><path class="t0tr_kbnd"/><path class="kdeocz3_k"/><path class="jkuojibnm"/><path class="nn2mbucfp"/><path class="wwyi7ubez"/><path class="om9c7ck0x"/></g>`,
		"fallback": "iconmind:budget-vs-actual-duotone-thin",
	});
}

export default Component;
