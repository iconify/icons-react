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
		"content": `<style>.diipsobkl {
  d: path("M5 3v18h14V3Z");
}

.l1jjkky7x {
  d: path("M8 18h8");
}

.mvm7r4bea {
  d: path("M8 14h8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wvn953rdk {
  d: path("M9 9V6l3 -3 3 3v3Z");
}
</style><g class="s0phu2bbs"><path class="diipsobkl"/><path class="wvn953rdk"/><path class="mvm7r4bea"/><path class="l1jjkky7x"/></g>`,
		"fallback": "iconmind:house-rules-outline-bold",
	});
}

export default Component;
