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
		"content": `<style>.a97ht-z9f {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 18h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.bj2hlhbfp {
  d: path("M3 12h12");
}

.ecph9tq5i {
  d: path("M3 18h12");
}

.f_vuvgsaw {
  d: path("M3 6h12");
}

.fdua8zbmm {
  d: path("m16 7 3 -3 3 3");
}

.fgef0hcge {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M19 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.k0l21tbkp {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 12h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.l0a8s873e {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 6h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nc30_fb9d {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m16 7 3 -3 3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t3rq50btb {
  d: path("M19 4v16");
}
</style><g class="s0phu2bbs"><path class="l0a8s873e"/><path class="k0l21tbkp"/><path class="a97ht-z9f"/><path class="fgef0hcge"/><path class="nc30_fb9d"/><path class="f_vuvgsaw"/><path class="bj2hlhbfp"/><path class="ecph9tq5i"/><path class="t3rq50btb"/><path class="fdua8zbmm"/></g>`,
		"fallback": "iconmind:backpressure-duotone-bold",
	});
}

export default Component;
