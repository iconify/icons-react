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
		"content": `<style>.s99j0dz2b {
  fill: currentColor;
  d: path("M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v12a1 1 0 0 1-2 0v-6h-2v8a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-8H4v6a1 1 0 0 1-2 0Zm18 4V5a1 1 0 0 0-1-1H5a.997.997 0 0 0-1 1v4Zm-3-4a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2ZM9 16a3 3 0 1 0 6 0a3 3 0 0 0-6 0");
}
</style><path class="s99j0dz2b"/>`,
		"fallback": "coolicons:atm-fill",
	});
}

export default Component;
