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
		"content": `<style>.rtnlvgecy {
  fill: currentColor;
  d: path("M17 22v-7a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v7H6a3 3 0 0 1-3-3v-8.092c0-.866.373-1.689 1.024-2.258l6-5.25a3 3 0 0 1 3.952 0l6 5.25A3 3 0 0 1 21 10.908V19a3 3 0 0 1-3 3Zm-2-5H9v-2a.997.997 0 0 1 1-1h4a.997.997 0 0 1 1 1Zm-6 5v-3h6v3Z");
}
</style><path class="rtnlvgecy"/>`,
		"fallback": "coolicons:house-garage-fill",
	});
}

export default Component;
