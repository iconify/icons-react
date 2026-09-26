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
		"content": `<style>.ossksxb7h {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 2L3 21L22 21M8 18L8 7M13 18L13 10M18 18L18 4");
}
</style><path class="ossksxb7h"/>`,
		"fallback": "keyline-icons:chart-column-sharp-fill",
	});
}

export default Component;
