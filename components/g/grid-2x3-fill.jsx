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
		"content": `<style>.elqhvcgnq {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18 2C20.2092 2 22 3.7909 22 6L22 18C22 20.2092 20.2092 22 18 22L6 22C3.7909 22 2 20.2092 2 18L2 6C2 3.7909 3.7909 2 6 2L18 2ZM11 8L4 8L4 10L11 10L11 14L4 14L4 16L11 16L11 20L13 20L13 16L20 16L20 14L13 14L13 10L20 10L20 8L13 8L13 4L11 4Z");
}
</style><path clip-rule="evenodd" class="elqhvcgnq"/>`,
		"fallback": "keyline-icons:grid-2x3-fill",
	});
}

export default Component;
