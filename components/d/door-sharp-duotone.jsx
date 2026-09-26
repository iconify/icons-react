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
		"content": `<style>.fuzi_tzja {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 22L5 3C5 2.4477 5.4477 2 6 2L18 2C18.5523 2 19 2.4477 19 3L19 22L5 22Z");
  stroke: none;
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.hkay-sbvv {
  d: path("M1 21L23 21M14 10L14 14");
}
</style><g class="gp_8x1bzb"><path class="fuzi_tzja"/><path class="hkay-sbvv"/></g>`,
		"fallback": "keyline-icons:door-sharp-duotone",
	});
}

export default Component;
