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
		"content": `<style>.ovltjydgy {
  fill: currentColor;
  d: path("M7 3a1 1 0 0 1 2 0v1h6V3a1 1 0 0 1 2 0v1h1a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1ZM5 19a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9H5Zm3-7h8a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2m0 4h4a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2");
}
</style><path class="ovltjydgy"/>`,
		"fallback": "coolicons:calendar-text-fill",
	});
}

export default Component;
