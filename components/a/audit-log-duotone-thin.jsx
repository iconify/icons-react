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
		"content": `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.d2gpzsh-s {
  d: path("M9 6v12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ktnnerbwt {
  d: path("M14 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.n0mccvbla {
  fill: currentColor;
  d: path("M14 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.qpr4gub3m {
  d: path("M11 9h5");
}

.v_xc_lbja {
  d: path("M11 13h5");
}

.yxow7abeb {
  fill: currentColor;
  d: path("M13 3H6v18h12V8");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="yxow7abeb"/><path class="n0mccvbla"/><path class="abnm6smsv"/><path class="d2gpzsh-s"/><path class="qpr4gub3m"/><path class="v_xc_lbja"/><path class="ktnnerbwt"/></g>`,
		"fallback": "iconmind:audit-log-duotone-thin",
	});
}

export default Component;
