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
		"content": `<style>.inwac7bag {
  fill: currentColor;
  d: path("M21.25 2A2.75 2.75 0 0 1 24 4.75v18.5A2.75 2.75 0 0 1 21.25 26H6.75A2.75 2.75 0 0 1 4 23.25V4.75A2.75 2.75 0 0 1 6.75 2zM6.75 3.5c-.69 0-1.25.56-1.25 1.25v18.5c0 .69.56 1.25 1.25 1.25h14.5c.69 0 1.25-.56 1.25-1.25V4.75c0-.69-.56-1.25-1.25-1.25zM19.25 19a.75.75 0 0 1 0 1.5H8.75a.75.75 0 0 1 0-1.5zm0-6a.75.75 0 0 1 0 1.5H8.75a.75.75 0 0 1 0-1.5zm0-6a.75.75 0 0 1 0 1.5H8.75a.75.75 0 0 1 0-1.5z");
}
</style><path class="inwac7bag"/>`,
		"fallback": "fluent:document-one-page-28-regular",
	});
}

export default Component;
