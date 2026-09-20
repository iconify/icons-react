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
		"content": `<style>.c1kziyotx {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M7 3H3v18h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.d6cu3qpew {
  d: path("M17 3h4v18h-4");
}

.dt__4kvmv {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M9 8.5h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hieqhxiaw {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M17 3h4v18h-4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ht9zq9bpv {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M9 12h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.iacisfiwc {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M9 15.5h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ldodvk1_f {
  d: path("M7 3H3v18h4");
}

.o40l0bbgl {
  d: path("M9 8.5h6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.x1_r36phd {
  d: path("M9 12h6");
}

.zpdz8rbaf {
  d: path("M9 15.5h6");
}
</style><g class="s0phu2bbs"><path class="c1kziyotx"/><path class="hieqhxiaw"/><path class="dt__4kvmv"/><path class="ht9zq9bpv"/><path class="iacisfiwc"/><path class="ldodvk1_f"/><path class="d6cu3qpew"/><path class="o40l0bbgl"/><path class="x1_r36phd"/><path class="zpdz8rbaf"/></g>`,
		"fallback": "iconmind:batch-request-duotone-bold",
	});
}

export default Component;
