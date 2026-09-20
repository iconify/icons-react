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
		"content": `<style>.axr3xwb0d {
  d: path("m7 17 4 -4");
}

.gms_xv68n {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.imcgu8bye {
  d: path("m17 7 2 -2");
}

.o22a_hbrn {
  d: path("m13 11 2 -2");
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.p2bbb2beg {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m17 7 2 -2");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.psjbxfbel {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m7 17 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.r3faxubne {
  d: path("M4 4v16");
}

.tcubudbkn {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m13 11 2 -2");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yu-j7jb_g {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 20h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="gms_xv68n"/><path class="yu-j7jb_g"/><path class="psjbxfbel"/><path class="tcubudbkn"/><path class="p2bbb2beg"/><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="axr3xwb0d"/><path class="o22a_hbrn"/><path class="imcgu8bye"/></g>`,
		"fallback": "iconmind:forecast-cash-duotone-thin",
	});
}

export default Component;
