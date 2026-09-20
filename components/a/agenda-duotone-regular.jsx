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
		"content": `<style>.a-ib5crgb {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 3v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hk697hhuu {
  d: path("M15.38 6.75a8 8 0 1 1 -6.76 0");
}

.jms1xqp8l {
  d: path("M9 3h6");
}

.lbsopw33e {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M9 12.5h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mo1bh2_2m {
  d: path("M9 12.5h6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oa__skhab {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M15.38 6.75a8 8 0 1 1 -6.76 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s-t-nzb4d {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M9 15.5h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.w8h2wrjnp {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M9 3h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yazo7scbq {
  d: path("M12 3v3");
}

.zpdz8rbaf {
  d: path("M9 15.5h6");
}
</style><g class="nrj6p8qat"><path class="oa__skhab"/><path class="a-ib5crgb"/><path class="w8h2wrjnp"/><path class="lbsopw33e"/><path class="s-t-nzb4d"/><path class="hk697hhuu"/><path class="yazo7scbq"/><path class="jms1xqp8l"/><path class="mo1bh2_2m"/><path class="zpdz8rbaf"/></g>`,
		"fallback": "iconmind:agenda-duotone-regular",
	});
}

export default Component;
