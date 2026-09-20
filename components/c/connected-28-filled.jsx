import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.loyh8sxeb {
  fill: currentColor;
  d: path("M22.5 2a3.5 3.5 0 1 1-1.887 6.446l-3.666 3.667c.35.545.553 1.192.553 1.887s-.204 1.341-.554 1.886l3.667 3.667a3.5 3.5 0 1 1-1.06 1.06l-3.667-3.667A3.5 3.5 0 0 1 14 17.5a3.5 3.5 0 0 1-1.887-.553l-3.667 3.666a3.5 3.5 0 1 1-1.06-1.06l3.667-3.667A3.5 3.5 0 0 1 10.5 14c0-.695.203-1.342.553-1.887L7.386 8.446a3.5 3.5 0 1 1 1.06-1.06l3.667 3.667A3.5 3.5 0 0 1 14 10.5c.695 0 1.341.204 1.886.553l3.667-3.667A3.5 3.5 0 0 1 22.5 2");
}
</style><path class="loyh8sxeb"/>`,
		"fallback": "fluent:connected-28-filled",
	});
}

export default Component;
