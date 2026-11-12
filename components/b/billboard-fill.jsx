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
		"content": `<style>.iifsikkie {
  fill: currentColor;
  d: path("M5 2h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-1v5a1 1 0 0 1-2 0v-5H8v5a1 1 0 0 1-2 0v-5H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m12 4H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2m-4 4H7a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2");
}
</style><path class="iifsikkie"/>`,
		"fallback": "coolicons:billboard-fill",
	});
}

export default Component;
