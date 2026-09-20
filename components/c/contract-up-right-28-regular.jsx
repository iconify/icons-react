import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xtr9vcu-r {
  fill: currentColor;
  d: path("M6.75 3A3.75 3.75 0 0 0 3 6.75v4.5a.75.75 0 0 0 1.5 0v-4.5A2.25 2.25 0 0 1 6.75 4.5H14v6.75A2.75 2.75 0 0 0 16.75 14h6.75v7.25a2.25 2.25 0 0 1-2.25 2.25h-4.5a.75.75 0 0 0 0 1.5h4.5A3.75 3.75 0 0 0 25 21.25V6.75A3.75 3.75 0 0 0 21.25 3zm8.75 8.25V4.5h5.75a2.25 2.25 0 0 1 2.25 2.25v5.75h-6.75c-.69 0-1.25-.56-1.25-1.25M3 15.75c0 .414.336.75.75.75h6.69l-7.22 7.22a.75.75 0 1 0 1.06 1.06l7.22-7.22v6.69a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-.75-.75h-8.5a.75.75 0 0 0-.75.75");
}
</style><path class="xtr9vcu-r"/>`,
		"fallback": "fluent:contract-up-right-28-regular",
	});
}

export default Component;
