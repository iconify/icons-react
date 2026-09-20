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
		"content": `<style>.hk697hhuu {
  d: path("M15.38 6.75a8 8 0 1 1 -6.76 0");
}

.iacisfiwc {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M9 15.5h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jms1xqp8l {
  d: path("M9 3h6");
}

.kc811hbmp {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M9 3h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mo1bh2_2m {
  d: path("M9 12.5h6");
}

.nu4ml-bmq {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 3v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.rq77ywb_t {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M15.38 6.75a8 8 0 1 1 -6.76 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.x5k6gac4c {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M9 12.5h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yazo7scbq {
  d: path("M12 3v3");
}

.zpdz8rbaf {
  d: path("M9 15.5h6");
}
</style><g class="s0phu2bbs"><path class="rq77ywb_t"/><path class="nu4ml-bmq"/><path class="kc811hbmp"/><path class="x5k6gac4c"/><path class="iacisfiwc"/><path class="hk697hhuu"/><path class="yazo7scbq"/><path class="jms1xqp8l"/><path class="mo1bh2_2m"/><path class="zpdz8rbaf"/></g>`,
		"fallback": "iconmind:agenda-duotone-bold",
	});
}

export default Component;
