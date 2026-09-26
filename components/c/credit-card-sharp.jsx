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
		"content": `<style>.gcebdcbxu {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 9L22 9M2 4L22 4L22 20L2 20L2 4Z");
}
</style><path class="gcebdcbxu"/>`,
		"fallback": "keyline-icons:credit-card-sharp",
	});
}

export default Component;
