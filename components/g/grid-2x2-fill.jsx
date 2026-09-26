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
		"content": `<style>.sxl5jackx {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18 2C20.2092 2 22 3.7909 22 6L22 18C22 20.2092 20.2092 22 18 22L6 22C3.7909 22 2 20.2092 2 18L2 6C2 3.7909 3.7909 2 6 2L18 2ZM11 11L4 11L4 13L11 13L11 20L13 20L13 13L20 13L20 11L13 11L13 4L11 4Z");
}
</style><path clip-rule="evenodd" class="sxl5jackx"/>`,
		"fallback": "keyline-icons:grid-2x2-fill",
	});
}

export default Component;
