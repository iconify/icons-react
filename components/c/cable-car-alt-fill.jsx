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
		"content": `<style>.e7y835bdm {
  fill: currentColor;
  d: path("M14.01 2a1 1 0 0 1 0 2H14a1 1 0 0 1 0-2Zm-4 1a1 1 0 0 1 0 2H10a1 1 0 0 1 0-2ZM3.757 8.03l16-4a1 1 0 0 1 .486 1.94L13 7.781V12h5a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h5V8.281L4.243 9.97a1 1 0 0 1-.486-1.94M6 14a1 1 0 0 0-1 1v1h3v-2Zm4 0v2h4v-2Zm9 2v-1a1 1 0 0 0-1-1h-2v2Z");
}
</style><path class="e7y835bdm"/>`,
		"fallback": "coolicons:cable-car-alt-fill",
	});
}

export default Component;
