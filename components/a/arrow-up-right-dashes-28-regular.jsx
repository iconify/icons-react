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
		"content": `<style>.j4bw00bye {
  fill: currentColor;
  d: path("M23.5 15.25a.75.75 0 0 0 1.5 0V3.75a.75.75 0 0 0-.75-.75h-11.5a.75.75 0 0 0 0 1.5h9.69l-5.22 5.22a.75.75 0 1 0 1.06 1.06l5.22-5.22zM8.78 20.28a.75.75 0 1 0-1.06-1.06l-4.5 4.5a.75.75 0 1 0 1.06 1.06zm7-8.06a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06l4.5-4.5a.75.75 0 0 1 1.06 0");
}
</style><path class="j4bw00bye"/>`,
		"fallback": "fluent:arrow-up-right-dashes-28-regular",
	});
}

export default Component;
