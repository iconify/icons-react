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
		"content": `<style>.c6gs9jbec {
  stroke-linejoin: round;
  d: path("M19 22L19 2");
}

.grmzm4bjt {
  d: path("M14 19L2 19M22 19L18 19");
}

.iauzcee-u {
  stroke-linejoin: round;
  d: path("M22 5H2");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lq_ib790c {
  d: path("M5 10L5 22M5 2L5 6");
}
</style><g class="ipq1z-bjh"><path class="iauzcee-u"/><path class="c6gs9jbec"/><path class="grmzm4bjt"/><path class="lq_ib790c"/></g>`,
		"fallback": "solar:frame-broken",
	});
}

export default Component;
