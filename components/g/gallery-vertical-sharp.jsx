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
		"content": `<style>.ie-dnl_yl {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 7L21 7L21 17L3 17L3 7ZM2 3L22 3M2 21L22 21");
}
</style><path class="ie-dnl_yl"/>`,
		"fallback": "keyline-icons:gallery-vertical-sharp",
	});
}

export default Component;
