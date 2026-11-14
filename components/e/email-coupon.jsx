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
		"content": `<style>.heagg9bky {
  d: path("m2.5 11l9.5 6l9.5-6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jg087qttg {
  d: path("M2.5 11v8a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-8");
}

.l9j0qbc6t {
  d: path("M6.5 13.5v-4a1.5 1.5 0 0 0 0-3V3h11v3.5a1.5 1.5 0 0 0 0 3v4M10 11l4-4.5m-4 0h.01M14 11h.01");
}
</style><g class="hntgybcog"><path class="jg087qttg"/><path class="heagg9bky"/><path class="l9j0qbc6t"/></g>`,
		"fallback": "uix:email-coupon",
	});
}

export default Component;
