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
		"content": `<style>.behzhac-s {
  fill: currentColor;
  d: path("M3 21V3h18v18zm5.4-4l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6z");
}
</style><path class="behzhac-s"/>`,
		"fallback": "material-symbols:disabled-by-default-sharp",
	});
}

export default Component;
