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
		"content": `<style>.a9vo92b3c {
  d: path("M2 20v-3a4.5 4.5 0 0 1 9 0v3");
}

.ed0jd0_6k {
  fill: currentColor;
  d: path("M14.5 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.f96m3ibxz {
  fill: currentColor;
  d: path("M3.5 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.q9l06zbkl {
  d: path("M13 20v-3a4.5 4.5 0 0 1 9 0v3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.txl-1ha9s {
  d: path("M14.5 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.w5km8ibkz {
  d: path("M3.5 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="s0phu2bbs"><path class="f96m3ibxz"/><path class="ed0jd0_6k"/><path class="w5km8ibkz"/><path class="txl-1ha9s"/><path class="a9vo92b3c"/><path class="q9l06zbkl"/></g>`,
		"fallback": "iconmind:hug-duotone-bold",
	});
}

export default Component;
