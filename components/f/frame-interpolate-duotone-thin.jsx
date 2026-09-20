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
		"content": `<style>.e8mk-vdvn {
  d: path("M6 9v6");
}

.fp0jerb6p {
  d: path("M10.5 6H13a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V9a3 3 0 0 1 3 -3h2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l517yxbln {
  d: path("M12 9v6");
}

.lgr612izs {
  d: path("M8 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.r8lmp2u_n {
  fill: currentColor;
  d: path("M10.5 6H13a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V9a3 3 0 0 1 3 -3h2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.sv2pgmbzl {
  fill: currentColor;
  d: path("m19 10 3 -3v10l-3 -3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.tqfrzx00u {
  d: path("m19 10 3 -3v10l-3 -3Z");
}

.wwnijrnro {
  fill: currentColor;
  d: path("M8 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="r8lmp2u_n"/><path class="sv2pgmbzl"/><path class="wwnijrnro"/><path class="fp0jerb6p"/><path class="tqfrzx00u"/><path class="e8mk-vdvn"/><path class="l517yxbln"/><path class="lgr612izs"/></g>`,
		"fallback": "iconmind:frame-interpolate-duotone-thin",
	});
}

export default Component;
