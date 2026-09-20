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

.i_15ylggi {
  d: path("M15 8a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.kw6-bpbhi {
  fill: currentColor;
  d: path("M15 16a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.mzsthfbrb {
  fill: currentColor;
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nzpsuduik {
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.pyew6cbwi {
  d: path("M15 16a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.sktrp_58r {
  d: path("M7 16a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.tcxfk34nj {
  d: path("M7 8a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.xyk_71m6i {
  fill: currentColor;
  d: path("M7 16a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.yc_5gkigy {
  fill: currentColor;
  d: path("M7 8a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.z2_n-53hq {
  fill: currentColor;
  d: path("M15 8a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="mzsthfbrb"/><path class="yc_5gkigy"/><path class="z2_n-53hq"/><path class="xyk_71m6i"/><path class="kw6-bpbhi"/><path class="nzpsuduik"/><path class="tcxfk34nj"/><path class="i_15ylggi"/><path class="sktrp_58r"/><path class="pyew6cbwi"/></g>`,
		"fallback": "iconmind:dice-duotone-thin",
	});
}

export default Component;
