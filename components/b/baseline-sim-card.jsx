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
		"content": `<style>.q01zlebso {
  fill: currentColor;
  d: path("M19.99 4c0-1.1-.89-2-1.99-2h-8L4 8v12c0 1.1.9 2 2 2h12.01c1.1 0 1.99-.9 1.99-2zM9 19H7v-2h2zm8 0h-2v-2h2zm-8-4H7v-4h2zm4 4h-2v-4h2zm0-6h-2v-2h2zm4 2h-2v-4h2z");
}
</style><path class="q01zlebso"/>`,
		"fallback": "ic:baseline-sim-card",
	});
}

export default Component;
