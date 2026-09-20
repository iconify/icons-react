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
		"content": `<style>.c438ceftc {
  d: path("M12 17v5");
}

.c8x35db9v {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 12h15");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fiw7wnbgt {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 17v5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.holoa3bic {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m16 9 3 3 -3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mxzk029nb {
  d: path("M12 10v4");
}

.n96aj2bbi {
  d: path("M4 12h15");
}

.q3srlnbfr {
  d: path("M12 2v5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.xtdc1ub4h {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 2v5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.y18-ixbva {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 10v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zpl29uvhf {
  d: path("m16 9 3 3 -3 3");
}
</style><g class="s0phu2bbs"><path class="xtdc1ub4h"/><path class="y18-ixbva"/><path class="fiw7wnbgt"/><path class="c8x35db9v"/><path class="holoa3bic"/><path class="q3srlnbfr"/><path class="mxzk029nb"/><path class="c438ceftc"/><path class="n96aj2bbi"/><path class="zpl29uvhf"/></g>`,
		"fallback": "iconmind:border-crossing-duotone-bold",
	});
}

export default Component;
