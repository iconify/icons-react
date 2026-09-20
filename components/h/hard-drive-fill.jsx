import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gw8vy3bik {
  fill: currentColor;
  d: path("M224 64H32a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16m-36 76a12 12 0 1 1 12-12a12 12 0 0 1-12 12");
}
</style><path class="gw8vy3bik"/>`,
		"fallback": "ph:hard-drive-fill",
	});
}

export default Component;
