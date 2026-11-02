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
		"content": `<style>.fmcmv3y4h {
  fill: currentColor;
  d: path("M6 3h2a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m10 0h2a3 3 0 1 1 0 6h-2a3 3 0 1 1 0-6m0 8h2a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3M6 15h2a3 3 0 1 1 0 6H6a3 3 0 1 1 0-6");
}
</style><path class="fmcmv3y4h"/>`,
		"fallback": "coolicons:dashboard-fill-round",
	});
}

export default Component;
