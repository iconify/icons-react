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
		"content": `<style>.h0x2_fcjh {
  fill: currentColor;
  d: path("M2 7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm5 2a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2Zm8 0a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Zm-6 4H7a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2m8 0h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2");
}
</style><path class="h0x2_fcjh"/>`,
		"fallback": "coolicons:captions-fill",
	});
}

export default Component;
