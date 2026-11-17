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
		"content": `<style>.il6f8uaqj {
  fill: currentColor;
  d: path("M10 9a.997.997 0 0 0-1 1v11a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3v-8.092c0-.866.373-1.689 1.024-2.258l6-5.25a3 3 0 0 1 3.952 0l4.397 3.847A1.001 1.001 0 0 1 17.714 9Zm4 3h6a2 2 0 0 1 2 2v2c-.001 3.075-1.94 4.852-4.629 5.928a1 1 0 0 1-.742 0C13.94 20.852 12.001 19.075 12 16v-2a2 2 0 0 1 2-2");
}
</style><path class="il6f8uaqj"/>`,
		"fallback": "coolicons:house-shield-corner-fill",
	});
}

export default Component;
