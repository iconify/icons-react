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
		"content": `<style>.ky-sfcbyw {
  fill: currentColor;
  d: path("M19 5H5C2.79 5 1 6.79 1 9v5c0 2.21 1.79 4 4 4h2v1h10v-1h2c2.21 0 4-1.79 4-4V9c0-2.21-1.79-4-4-4m2 9c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2z");
}
</style><path class="ky-sfcbyw"/>`,
		"fallback": "ic:baseline-home-max",
	});
}

export default Component;
