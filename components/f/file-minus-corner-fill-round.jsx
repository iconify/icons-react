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
		"content": `<style>.c5a0avboz {
  fill: currentColor;
  d: path("M10 21a1 1 0 0 1-1 1a5 5 0 0 1-3.536-1.464A4.98 4.98 0 0 1 4 17V7a5 5 0 0 1 5-5h4c.265 0 .52.105.707.293l6 6A1 1 0 0 1 19 10h-6a3 3 0 0 0-3 3Zm3-17v2a2 2 0 0 0 2 2h2Zm8 11a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2Z");
}
</style><path class="c5a0avboz"/>`,
		"fallback": "coolicons:file-minus-corner-fill-round",
	});
}

export default Component;
