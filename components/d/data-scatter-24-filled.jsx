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
		"content": `<style>.mzhdcsbii {
  fill: currentColor;
  d: path("M4 3a1 1 0 0 1 1 1v13.5A1.5 1.5 0 0 0 6.5 19H20a1 1 0 1 1 0 2H6.5A3.5 3.5 0 0 1 3 17.5V4a1 1 0 0 1 1-1m13 1a3 3 0 1 0 0 6a3 3 0 0 0 0-6M6 9a3 3 0 1 1 6 0a3 3 0 0 1-6 0m6 6a3 3 0 1 1 6 0a3 3 0 0 1-6 0");
}
</style><path class="mzhdcsbii"/>`,
		"fallback": "fluent:data-scatter-24-filled",
	});
}

export default Component;
