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
		"content": `<style>.l1xjszcyw {
  fill: currentColor;
  d: path("M3 21V3h18v18zm3-8.425l4-4l4 4l4-4l1 1V5H5v6.575zM5 19h14v-6.6l-1-1l-4 4l-4-4l-4 4l-1-1zm0 0v-6.6v2V5z");
}
</style><path class="l1xjszcyw"/>`,
		"fallback": "material-symbols:broken-image-outline-sharp",
	});
}

export default Component;
