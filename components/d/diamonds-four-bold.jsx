import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xuw7-xb0k {
  fill: currentColor;
  d: path("M119.51 108.49a12 12 0 0 0 17 0l38-38a12 12 0 0 0 0-17l-38-38a12 12 0 0 0-17 0l-38 38a12 12 0 0 0 0 17ZM128 41l21 21l-21 21l-21-21Zm8.49 106.54a12 12 0 0 0-17 0l-38 38a12 12 0 0 0 0 17l38 38a12 12 0 0 0 17 0l38-38a12 12 0 0 0 0-17ZM128 215l-21-21l21-21l21 21Zm-19.51-95.52l-38-38a12 12 0 0 0-17 0l-38 38a12 12 0 0 0 0 17l38 38a12 12 0 0 0 17 0l38-38a12 12 0 0 0 0-16.97ZM62 149l-21-21l21-21l21 21Zm178.49-29.52l-38-38a12 12 0 0 0-17 0l-38 38a12 12 0 0 0 0 17l38 38a12 12 0 0 0 17 0l38-38a12 12 0 0 0 0-16.97ZM194 149l-21-21l21-21l21 21Z");
}
</style><path class="xuw7-xb0k"/>`,
		"fallback": "ph:diamonds-four-bold",
	});
}

export default Component;
