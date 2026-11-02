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
		"content": `<style>.kat6uwb1r {
  fill: currentColor;
  d: path("M8 3v5H3V4a1 1 0 0 1 1-1Zm2 5V3h4v5Zm6-5h4a1 1 0 0 1 1 1v4h-5ZM3 10h5v4H3Zm11 0v4h-4v-4Zm7 4h-5v-4h5ZM3 16h5v5H4a1 1 0 0 1-1-1Zm7 5v-5h4v5Zm6 0v-5h5v4a1 1 0 0 1-1 1Z");
}
</style><path class="kat6uwb1r"/>`,
		"fallback": "coolicons:grid-alt-fill-sharp",
	});
}

export default Component;
