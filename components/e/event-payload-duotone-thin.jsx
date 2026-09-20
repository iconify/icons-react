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

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ig2phii_s {
  d: path("m15 11 -3 3h2.5l-3 3");
}

.mfc7nxp-y {
  d: path("M9 7h6");
}

.yxow7abeb {
  fill: currentColor;
  d: path("M13 3H6v18h12V8");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="yxow7abeb"/><path class="abnm6smsv"/><path class="mfc7nxp-y"/><path class="ig2phii_s"/></g>`,
		"fallback": "iconmind:event-payload-duotone-thin",
	});
}

export default Component;
