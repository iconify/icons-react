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
		"content": `<style>.d1sql1bsn {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9 3h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hk697hhuu {
  d: path("M15.38 6.75a8 8 0 1 1 -6.76 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jms1xqp8l {
  d: path("M9 3h6");
}

.k7hb1iliq {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9 12.5h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mo1bh2_2m {
  d: path("M9 12.5h6");
}

.rr5s23bmj {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 3v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.timolub7j {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9 15.5h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.tqek15bkw {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M15.38 6.75a8 8 0 1 1 -6.76 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yazo7scbq {
  d: path("M12 3v3");
}

.zpdz8rbaf {
  d: path("M9 15.5h6");
}
</style><g class="hntgybcog"><path class="tqek15bkw"/><path class="rr5s23bmj"/><path class="d1sql1bsn"/><path class="k7hb1iliq"/><path class="timolub7j"/><path class="hk697hhuu"/><path class="yazo7scbq"/><path class="jms1xqp8l"/><path class="mo1bh2_2m"/><path class="zpdz8rbaf"/></g>`,
		"fallback": "iconmind:agenda-duotone-thin",
	});
}

export default Component;
