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
		"content": `<style>.kr3bfzbns {
  fill: currentColor;
  d: path("M17.714 9H10a.997.997 0 0 0-1 1v11a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3v-8.092c0-.866.373-1.689 1.024-2.258l6-5.25a3 3 0 0 1 3.952 0l4.397 3.847A1.001 1.001 0 0 1 17.714 9m-4.007 7.293l2.226 2.226l4.299-5.159a1 1 0 1 1 1.536 1.28l-5 6a1 1 0 0 1-1.475.067l-3-3a.999.999 0 1 1 1.414-1.414");
}
</style><path class="kr3bfzbns"/>`,
		"fallback": "coolicons:house-check-corner-fill",
	});
}

export default Component;
