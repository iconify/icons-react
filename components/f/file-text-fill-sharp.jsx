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
		"content": `<style>.c_-kp1hia {
  fill: currentColor;
  d: path("M13 2c.265 0 .52.105.707.293l6 6A1 1 0 0 1 20 9v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm0 7h5l-5-5Zm-4 3a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Zm6 4H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2");
}
</style><path class="c_-kp1hia"/>`,
		"fallback": "coolicons:file-text-fill-sharp",
	});
}

export default Component;
