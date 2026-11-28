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

.soig6ab-j {
  d: path("M9 5.5L9 10.5M13 5.5L13 10.5M11 12.5L11 17.5M15 12.5L15 17.5");
}

.vab0hfbha {
  stroke-opacity: 0.4;
  d: path("M5 2L5 21M19 2L19 21M2 21L22 21M5 8L19 8M5 15L19 15");
}
</style><g class="gp_8x1bzb"><path class="vab0hfbha"/><path class="soig6ab-j"/></g>`,
		"fallback": "keyline-icons:abacus-sharp-duotone",
	});
}

export default Component;
