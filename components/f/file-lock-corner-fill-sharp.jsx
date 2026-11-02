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
		"content": `<style>.rzw5gfb4p {
  fill: currentColor;
  d: path("M19 10h-9v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h8c.265 0 .52.105.707.293l6 6A1 1 0 0 1 19 10m-6-6v4h4Zm8 11a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h1a3 3 0 1 1 6 0Zm-3 0a1 1 0 0 0-2 0Zm-4 5h6v-3h-6Z");
}
</style><path class="rzw5gfb4p"/>`,
		"fallback": "coolicons:file-lock-corner-fill-sharp",
	});
}

export default Component;
