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
		"content": `<style>.cz1lj_bhh {
  fill: currentColor;
  d: path("M5 8.171V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v4.171A3 3 0 0 1 21 11v7a1 1 0 0 1-1 1h-1v1a1 1 0 0 1-2 0v-1H7v1a1 1 0 0 1-2 0v-1H4a1 1 0 0 1-1-1v-7c0-1.27.803-2.405 2-2.829M17 5H7v3.171A3 3 0 0 1 9 11v1h6v-1c0-1.27.803-2.405 2-2.829Z");
}
</style><path class="cz1lj_bhh"/>`,
		"fallback": "coolicons:armchair-fill-sharp",
	});
}

export default Component;
