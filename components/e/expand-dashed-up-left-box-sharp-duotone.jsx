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

.i83ygioeo {
  d: path("M14 18L3 18M6.2929 14.7071L3 18L6.2929 21.2929M18 14L18 3M21.2929 6.2929L18 3L14.7071 6.2929");
}

.vdyi3lbjk {
  stroke-opacity: 0.4;
  d: path("M3 9L3 5M5 3L9 3M11 5L11 9M5 11L9 11");
}
</style><g class="gp_8x1bzb"><path class="i83ygioeo"/><path class="vdyi3lbjk"/></g>`,
		"fallback": "keyline-icons:expand-dashed-up-left-box-sharp-duotone",
	});
}

export default Component;
