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
		"content": `<style>.ert_saboi {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 12h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.h-r3jzd3w {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m6 8 4 4 -4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jcxg2bbvb {
  d: path("M2 12h8");
}

.jlfl_ccwj {
  d: path("M14 12h8");
}

.kaj4_cbkd {
  d: path("m6 8 4 4 -4 4");
}

.kes5k2fvf {
  d: path("m18 8 -4 4 4 4");
}

.ozqpaabei {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m18 8 -4 4 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.u58l6cc7h {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M14 12h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="ert_saboi"/><path class="h-r3jzd3w"/><path class="u58l6cc7h"/><path class="ozqpaabei"/><path class="jcxg2bbvb"/><path class="kaj4_cbkd"/><path class="jlfl_ccwj"/><path class="kes5k2fvf"/></g>`,
		"fallback": "iconmind:contradiction-duotone-thin",
	});
}

export default Component;
