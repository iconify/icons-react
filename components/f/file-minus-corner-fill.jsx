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
		"content": `<style>.i1lz5ybad {
  fill: currentColor;
  d: path("M10 11v10a1 1 0 0 1-1 1H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6c.265 0 .52.105.707.293l6 6A1 1 0 0 1 19 10h-8a.997.997 0 0 0-1 1m3-7v2a2 2 0 0 0 2 2h2Zm8 11a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2Z");
}
</style><path class="i1lz5ybad"/>`,
		"fallback": "coolicons:file-minus-corner-fill",
	});
}

export default Component;
