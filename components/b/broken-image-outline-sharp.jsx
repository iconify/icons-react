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
		"content": `<style>.ndgy1mbog {
  fill: currentColor;
  d: path("M4 20V4h16v16zm2-6.714l4-4l4 4l4-4l1 1V5H5v7.287zM5 19h14v-7.292l-1-1l-4 4l-4-4l-4 4l-1-1zm0 0v-7.292v1V5z");
}
</style><path class="ndgy1mbog"/>`,
		"fallback": "material-symbols-light:broken-image-outline-sharp",
	});
}

export default Component;
