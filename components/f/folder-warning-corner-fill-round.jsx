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
		"content": `<style>.l3zbsvbkl {
  fill: currentColor;
  d: path("M10.707 3.293L12.414 5H19a3 3 0 0 1 3 3a1 1 0 0 1-1 1h-9a3 3 0 0 0-3 3v8a1 1 0 0 1-1 1H7a5 5 0 0 1-5-5V6a3 3 0 0 1 3-3h5c.265 0 .52.105.707.293M18 18a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0Zm-1 2h.01a1 1 0 0 1 0 2H17a1 1 0 0 1 0-2");
}
</style><path class="l3zbsvbkl"/>`,
		"fallback": "coolicons:folder-warning-corner-fill-round",
	});
}

export default Component;
