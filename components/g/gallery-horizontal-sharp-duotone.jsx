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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r8svpwbcv {
  d: path("M3 2L3 22M21 2L21 22");
}

.xg-j-gbpu {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M7 2L17 2C17.5523 2 18 2.4477 18 3L18 21C18 21.5523 17.5523 22 17 22L7 22C6.4477 22 6 21.5523 6 21L6 3C6 2.4477 6.4477 2 7 2Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="xg-j-gbpu"/><path class="r8svpwbcv"/></g>`,
		"fallback": "keyline-icons:gallery-horizontal-sharp-duotone",
	});
}

export default Component;
