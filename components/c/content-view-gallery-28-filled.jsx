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
		"content": `<style>.id6i3h0dz {
  fill: currentColor;
  d: path("M6.75 3H17v22H6.75A3.75 3.75 0 0 1 3 21.25V6.75A3.75 3.75 0 0 1 6.75 3M18.5 17v-6H25v6zm0 8v-6.5H25v2.75A3.75 3.75 0 0 1 21.25 25zm0-22v6.5H25V6.75A3.75 3.75 0 0 0 21.25 3zM7.75 7.5c-.69 0-1.25.56-1.25 1.25v3.5c0 .69.56 1.25 1.25 1.25h5c.69 0 1.25-.56 1.25-1.25v-3.5c0-.69-.56-1.25-1.25-1.25zM8 12V9h4.5v3zm-1.5 4.25c0 .414.336.75.75.75h6a.75.75 0 0 0 0-1.5h-6a.75.75 0 0 0-.75.75M7.25 19a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z");
}
</style><path class="id6i3h0dz"/>`,
		"fallback": "fluent:content-view-gallery-28-filled",
	});
}

export default Component;
