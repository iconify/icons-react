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
		"content": `<style>.vs3b2pbzq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 6L21 6M18 9L21 6L18 3M6 11L6 21M3 18L6 21L9 18M21 16L21 18M18 21L16 21M13 18L13 16M18 13L16 13");
}
</style><path class="vs3b2pbzq"/>`,
		"fallback": "keyline-icons:expand-dashed-down-right-box-fill",
	});
}

export default Component;
