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

.f9z-0cczq {
  d: path("M9 10.5h6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vmk3-8b7s {
  d: path("M13.5 8.5v4");
}

.wluwrgbwr {
  d: path("M9 14.5h6");
}

.xaqt94wpa {
  d: path("M10.5 12.5v4");
}

.yxow7abeb {
  fill: currentColor;
  d: path("M13 3H6v18h12V8");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="yxow7abeb"/><path class="abnm6smsv"/><path class="f9z-0cczq"/><path class="vmk3-8b7s"/><path class="wluwrgbwr"/><path class="xaqt94wpa"/></g>`,
		"fallback": "iconmind:document-config-duotone-regular",
	});
}

export default Component;
