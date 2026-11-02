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
		"content": `<style>.zsct0_b7j {
  fill: currentColor;
  d: path("M2 7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm9 2a1 1 0 0 0-2 0v2H7a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2h-2Zm7 0a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Zm-1.99 4H16a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2");
}
</style><path class="zsct0_b7j"/>`,
		"fallback": "coolicons:gamepad-fill",
	});
}

export default Component;
