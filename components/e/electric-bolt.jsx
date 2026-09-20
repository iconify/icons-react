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
		"content": `<style>.j4l9feqgh {
  fill: currentColor;
  d: path("m7 22l4-7.5l-8-1L15 2h2l-4 7.5l8 1L9 22z");
}
</style><path class="j4l9feqgh"/>`,
		"fallback": "material-symbols:electric-bolt",
	});
}

export default Component;
