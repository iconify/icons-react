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
		"content": `<style>.amiil1ble {
  fill: currentColor;
  d: path("M2 3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-3v5a1 1 0 0 1-2 0v-5H8v5a1 1 0 0 1-2 0v-5H3a1 1 0 0 1-1-1Zm15 3H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2m-4 4H7a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2");
}
</style><path class="amiil1ble"/>`,
		"fallback": "coolicons:billboard-fill-sharp",
	});
}

export default Component;
