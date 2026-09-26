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
		"content": `<style>.c-zhdyyrj {
  stroke-opacity: 0.4;
  d: path("M9.5 21L14.5 21M21 14.5L21 9.5M3 16L3 21L7 21M17 21L21 21L21 17M16 3L21 3L21 7");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pnm_cr1lt {
  d: path("M2 12.5L12.5 12.5L12.5 2M2.7071 2.7071L12.3536 12.3536");
}
</style><g class="gp_8x1bzb"><path class="c-zhdyyrj"/><path class="pnm_cr1lt"/></g>`,
		"fallback": "keyline-icons:arrow-in-down-right-dashed-panel-sharp-two-tone",
	});
}

export default Component;
