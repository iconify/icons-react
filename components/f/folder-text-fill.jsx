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
		"content": `<style>.ifjlbfb4r {
  fill: currentColor;
  d: path("M12.414 5H19a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h5c.265 0 .52.105.707.293ZM15 10H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2m0 4H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2");
}
</style><path class="ifjlbfb4r"/>`,
		"fallback": "coolicons:folder-text-fill",
	});
}

export default Component;
