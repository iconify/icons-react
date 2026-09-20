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
		"content": `<style>.aw2xgdc6s {
  d: path("m14 15 7 -7");
}

.jy2rzibrh {
  d: path("M6 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.rc4z2wbgq {
  d: path("M4.5 16a4.5 4.5 0 0 1 9 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vdkk_bbqh {
  fill: currentColor;
  d: path("M6 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="vdkk_bbqh"/><path class="jy2rzibrh"/><path class="rc4z2wbgq"/><path class="aw2xgdc6s"/></g>`,
		"fallback": "iconmind:conductor-duotone-bold",
	});
}

export default Component;
