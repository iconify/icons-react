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
		"content": `<style>.ci8aik1lf {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M8 3c6 3 6 15 0 18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.em798y7rn {
  d: path("M6 12h14");
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

.mi_m6achy {
  d: path("m17 9 3 3 -3 3");
}

.ndk47rb8x {
  d: path("M8 3c6 3 6 15 0 18");
}

.p-b7dhbbl {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M8 3v18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.tbmul1b-b {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 12h14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.wuvisubmw {
  d: path("M8 3v18");
}
</style><g class="hntgybcog"><path class="ci8aik1lf"/><path class="p-b7dhbbl"/><path class="tbmul1b-b"/><path class="gv3gpab3b"/><path class="ndk47rb8x"/><path class="wuvisubmw"/><path class="em798y7rn"/><path class="mi_m6achy"/></g>`,
		"fallback": "iconmind:archery-duotone-thin",
	});
}

export default Component;
