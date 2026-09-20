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

.l27uxv42s {
  d: path("M9 11h3l3 3 -3 3H9Z");
}

.mfc7nxp-y {
  d: path("M9 7h6");
}

.ogsfsodtd {
  fill: currentColor;
  d: path("M9 11h3l3 3 -3 3H9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.yxow7abeb {
  fill: currentColor;
  d: path("M13 3H6v18h12V8");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="yxow7abeb"/><path class="ogsfsodtd"/><path class="abnm6smsv"/><path class="mfc7nxp-y"/><path class="l27uxv42s"/></g>`,
		"fallback": "iconmind:etag-duotone-thin",
	});
}

export default Component;
