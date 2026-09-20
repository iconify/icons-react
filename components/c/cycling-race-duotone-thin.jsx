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
		"content": `<style>.btevwoo0v {
  d: path("m18 15 -7 -7");
}

.cqvq03bab {
  fill: currentColor;
  d: path("M14 15a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jfpnmxb4i {
  d: path("M2 15a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.laxf09b_c {
  d: path("m13 8 2 -2");
}

.rckmicclj {
  d: path("M14 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.sby6clb1g {
  d: path("m6 15 7 -7");
}

.sebrrz16i {
  d: path("M14 15a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.u3x3u-byr {
  fill: currentColor;
  d: path("M14 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.xzs9k3h2v {
  fill: currentColor;
  d: path("M2 15a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="xzs9k3h2v"/><path class="cqvq03bab"/><path class="u3x3u-byr"/><path class="jfpnmxb4i"/><path class="sebrrz16i"/><path class="sby6clb1g"/><path class="btevwoo0v"/><path class="rckmicclj"/><path class="laxf09b_c"/></g>`,
		"fallback": "iconmind:cycling-race-duotone-thin",
	});
}

export default Component;
