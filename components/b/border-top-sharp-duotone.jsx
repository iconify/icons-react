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

.lhwx82b9b {
  stroke-opacity: 0.4;
  d: path("M21 9.5L21 14.5M21 17L21 21L17 21M14.5 21L9.5 21M7 21L3 21L3 17M3 14.5L3 9.5");
}

.wgyvzlb8x {
  d: path("M3 7L3 3L21 3L21 7");
}
</style><g class="gp_8x1bzb"><path class="lhwx82b9b"/><path class="wgyvzlb8x"/></g>`,
		"fallback": "keyline-icons:border-top-sharp-duotone",
	});
}

export default Component;
