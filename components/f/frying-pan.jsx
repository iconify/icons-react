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
		"content": `<style>.efu9usbuy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 11h12v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm12 0l6-3");
}
</style><path class="efu9usbuy"/>`,
		"fallback": "coolicons:frying-pan",
	});
}

export default Component;
