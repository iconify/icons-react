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
		"content": `<style>.cvcsfybdq {
  d: path("M21.7407 10.7191L15.5 18L13.2071 15.7071");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.joslu-vdk {
  stroke-opacity: 0.4;
  d: path("M2.2311 10.7118L7.1667 16L16.7964 5.6823");
}
</style><g class="gp_8x1bzb"><path class="joslu-vdk"/><path class="cvcsfybdq"/></g>`,
		"fallback": "keyline-icons:double-check-sharp-two-tone",
	});
}

export default Component;
