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
		"content": `<style>.ga4spfbxc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 7H7a1 1 0 0 0-1 1v1c0 .64-.36 1.36-1 2a1.414 1.414 0 0 0 0 2c.64.64 1 1.36 1 2v1a1 1 0 0 0 1 1h1m8-10h1a1 1 0 0 1 1 1v1c0 .64.36 1.36 1 2a1.414 1.414 0 0 1 0 2c-.64.64-1 1.36-1 2v1a1 1 0 0 1-1 1h-1");
}
</style><path class="ga4spfbxc"/>`,
		"fallback": "coolicons:braces-duotone",
	});
}

export default Component;
