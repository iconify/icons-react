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
		"content": `<style>.veuc6xbkf {
  fill: currentColor;
  d: path("m18 16l-4-4l4-4l1.4 1.4l-1.575 1.6H22v2h-4.175l1.575 1.6zm-7 4V4h2v16zm-5-4l-1.4-1.4L6.175 13H2v-2h4.175L4.6 9.4L6 8l4 4z");
}
</style><path class="veuc6xbkf"/>`,
		"fallback": "material-symbols:horizontal-align-center-sharp",
	});
}

export default Component;
