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

.mfc7nxp-y {
  d: path("M9 7h6");
}

.pb8u2_oec {
  fill: currentColor;
  d: path("m12 11 3 3 -3 3 -3 -3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.yxow7abeb {
  fill: currentColor;
  d: path("M13 3H6v18h12V8");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.zf4ugsben {
  d: path("m12 11 3 3 -3 3 -3 -3Z");
}
</style><g class="s0phu2bbs"><path class="yxow7abeb"/><path class="pb8u2_oec"/><path class="abnm6smsv"/><path class="mfc7nxp-y"/><path class="zf4ugsben"/></g>`,
		"fallback": "iconmind:crd-duotone-bold",
	});
}

export default Component;
