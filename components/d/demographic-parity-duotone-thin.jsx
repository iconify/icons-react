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
		"content": `<style>.gms_xv68n {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.guktqcbqt {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M16 11v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j-ilx17of {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M8 11v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nu6kj0bjf {
  d: path("M16 11v7");
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.pma7fkjmg {
  d: path("M8 11v7");
}

.r-3ib9fxz {
  d: path("M12 11v7");
}

.r3faxubne {
  d: path("M4 4v16");
}

.rt_7r6b2x {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 11v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yu-j7jb_g {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 20h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="gms_xv68n"/><path class="yu-j7jb_g"/><path class="j-ilx17of"/><path class="rt_7r6b2x"/><path class="guktqcbqt"/><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="pma7fkjmg"/><path class="r-3ib9fxz"/><path class="nu6kj0bjf"/></g>`,
		"fallback": "iconmind:demographic-parity-duotone-thin",
	});
}

export default Component;
