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
		"content": `<style>.ear0occhc {
  fill: currentColor;
  d: path("M6.25 3h8.25v18H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3m11.5 18H16v-5h5v1.75A3.25 3.25 0 0 1 17.75 21M21 14.5h-5v-5h5zM16 8V3h1.75A3.25 3.25 0 0 1 21 6.25V8zM6 13.75c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0-.75.75M7.25 6.5C6.56 6.5 6 7.06 6 7.75v2.5c0 .69.56 1.25 1.25 1.25h3.5c.69 0 1.25-.56 1.25-1.25v-2.5c0-.69-.56-1.25-1.25-1.25zM7.5 10V8h3v2zM6 16.75c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0-.75.75");
}
</style><path class="ear0occhc"/>`,
		"fallback": "fluent:content-view-gallery-24-filled",
	});
}

export default Component;
