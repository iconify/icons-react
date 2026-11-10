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
		"content": `<style>.bxj6umbrm {
  d: path("M20 1V23M4 1V23M9 7V17H12H15V7H12H9Z");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.td3wj3acg {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 23H3V1H5V23ZM21 23H19V1H21V23ZM15 6C15.552 6 16 6.448 16 7V17C16 17.552 15.552 18 15 18H9C8.448 18 8 17.552 8 17V7C8 6.448 8.448 6 9 6H15Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="td3wj3acg"/><path class="bxj6umbrm"/></g>`,
		"fallback": "keyline-icons:align-horizontal-space-around-sharp-two-tone",
	});
}

export default Component;
