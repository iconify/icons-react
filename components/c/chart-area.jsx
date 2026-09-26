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
		"content": `<style>.oabk7f9qq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3L3 19C3 20.1046 3.8954 21 5 21L21 21M7 15L13 9L16 12L21 7L21 16C21 16.5523 20.5523 17 20 17L8 17C7.4477 17 7 16.5523 7 16L7 15Z");
}
</style><path class="oabk7f9qq"/>`,
		"fallback": "keyline-icons:chart-area",
	});
}

export default Component;
