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
		"content": `<style>.esjml2b0p {
  fill: currentColor;
  d: path("M7 4L11 4C11.5523 4 12 4.4477 12 5L12 10C12 10.5523 11.5523 11 11 11L7 11C6.4477 11 6 10.5523 6 10L6 5C6 4.4477 6.4477 4 7 4ZM15 8L19 8C19.5523 8 20 8.4477 20 9L20 15C20 15.5523 19.5523 16 19 16L15 16C14.4477 16 14 15.5523 14 15L14 9C14 8.4477 14.4477 8 15 8Z");
  stroke: none;
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qe_oe2wyo {
  d: path("M3 2L3 21L22 21M9 2L9 5M9 10L9 14M17 5L17 9M17 15L17 18");
}
</style><g class="gp_8x1bzb"><path class="esjml2b0p"/><path class="qe_oe2wyo"/></g>`,
		"fallback": "keyline-icons:chart-candlestick-sharp-fill",
	});
}

export default Component;
