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
		"content": `<style>.r4m6-cczg {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 2L3 21L22 21M6 7L17 7M6 12L14 12M6 17L20 17");
}
</style><path class="r4m6-cczg"/>`,
		"fallback": "keyline-icons:chart-bar-sharp-fill",
	});
}

export default Component;
