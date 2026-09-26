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

.h0_549rrx {
  d: path("M10 6L21 6M17.7071 9.2929L21 6L17.7071 2.7071M6 10L6 21M2.7071 17.7071L6 21L9.2929 17.7071");
}

.xap4lcbam {
  stroke-opacity: 0.4;
  d: path("M21 15L21 19M19 21L15 21M13 19L13 15M19 13L15 13");
}
</style><g class="gp_8x1bzb"><path class="h0_549rrx"/><path class="xap4lcbam"/></g>`,
		"fallback": "keyline-icons:expand-dashed-down-right-box-sharp-duotone",
	});
}

export default Component;
