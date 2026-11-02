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
		"content": `<style>.k3-tx8bkj {
  fill: currentColor;
  d: path("M13 3v18a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0M9 3v8H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm6 0h5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-5ZM9 21H6a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h3Zm6 0v-8h3a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1Z");
}
</style><path class="k3-tx8bkj"/>`,
		"fallback": "coolicons:align-center-horizontal-fill-sharp",
	});
}

export default Component;
