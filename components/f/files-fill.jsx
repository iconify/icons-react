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
		"content": `<style>.cc2jllbxz {
  fill: currentColor;
  d: path("m16.707 2.293l5 5A1 1 0 0 1 22 8v8a3 3 0 0 1-3 3h-2a1 1 0 0 1 0-2h2a1 1 0 0 0 1-1V9h-3a2 2 0 0 1-2-2V4h-4a1 1 0 0 1 0-2h5c.265 0 .52.105.707.293m-3 8A1 1 0 0 1 14 11v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h3c.265 0 .52.105.707.293ZM17 5.414V7h1.586ZM8 10a1 1 0 0 0 1 1h3L8 7Z");
}
</style><path class="cc2jllbxz"/>`,
		"fallback": "coolicons:files-fill",
	});
}

export default Component;
