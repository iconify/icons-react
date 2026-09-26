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

.w0q9bbltx {
  fill: currentColor;
  d: path("M4 1L20 1C20.5523 1 21 1.4477 21 2L21 12C21 12.5523 20.5523 13 20 13L11 13L11 22C11 22.5523 10.5523 23 10 23L4 23C3.4477 23 3 22.5523 3 22L3 2C3 1.4477 3.4477 1 4 1ZM5 19L5 21L11 21L11 19L5 19ZM7 6L7 14L9 14L9 6L7 6Z");
  stroke: none;
}

.zhydt8bsg {
  d: path("M13.7071 18.7071L16 21L20.2929 16.7071");
}
</style><g class="gp_8x1bzb"><path class="w0q9bbltx"/><path class="zhydt8bsg"/></g>`,
		"fallback": "keyline-icons:book-check-sharp-fill",
	});
}

export default Component;
