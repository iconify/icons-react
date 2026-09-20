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
		"content": `<style>.axsbs7box {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M16 2a2.5 2.5 0 0 1 0 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.d3z3y1b0x {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M16 12a2.5 2.5 0 0 1 0 -5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.f275eobml {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 20h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.h4zgjab7u {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8 2a2.5 2.5 0 0 1 0 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hm2fmmbfq {
  d: path("M8 12a2.5 2.5 0 0 1 0 -5");
}

.i-2_6c56r {
  d: path("M8 2a2.5 2.5 0 0 1 0 5");
}

.j6tvmikgv {
  d: path("M16 2a2.5 2.5 0 0 1 0 5");
}

.nqnw98byf {
  d: path("M2 14h20");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pm3a-tbmq {
  d: path("M16 12a2.5 2.5 0 0 1 0 -5");
}

.u78lc2bnx {
  d: path("M6 20h12");
}

.wroe6tbmv {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8 12a2.5 2.5 0 0 1 0 -5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zkem-xbdf {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 14h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="zkem-xbdf"/><path class="wroe6tbmv"/><path class="h4zgjab7u"/><path class="d3z3y1b0x"/><path class="axsbs7box"/><path class="f275eobml"/><path class="nqnw98byf"/><path class="hm2fmmbfq"/><path class="i-2_6c56r"/><path class="pm3a-tbmq"/><path class="j6tvmikgv"/><path class="u78lc2bnx"/></g>`,
		"fallback": "iconmind:geothermal-duotone-regular",
	});
}

export default Component;
