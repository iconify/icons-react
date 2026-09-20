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
		"content": `<style>.dqsvlfbgk {
  fill: currentColor;
  d: path("M11 9a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.e36i9zwxh {
  d: path("M11 15h6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wuvisubmw {
  d: path("M8 3v18");
}

.wvvllx1oh {
  d: path("M11 18h6");
}

.y4_6s7b5v {
  d: path("M4 5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.zvb1nubon {
  d: path("M11 9a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.zyr0_hpav {
  fill: currentColor;
  d: path("M4 5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="zyr0_hpav"/><path class="dqsvlfbgk"/><path class="y4_6s7b5v"/><path class="wuvisubmw"/><path class="zvb1nubon"/><path class="e36i9zwxh"/><path class="wvvllx1oh"/></g>`,
		"fallback": "iconmind:encyclopedia-duotone-thin",
	});
}

export default Component;
