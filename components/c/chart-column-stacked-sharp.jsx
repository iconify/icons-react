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
		"content": `<style>.qgj-x05-m {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 2L3 21L22 21M8 8L12 8L12 17L8 17L8 8ZM16 5L20 5L20 17L16 17L16 5ZM8 12L12 12M16 10L20 10");
}
</style><path class="qgj-x05-m"/>`,
		"fallback": "keyline-icons:chart-column-stacked-sharp",
	});
}

export default Component;
