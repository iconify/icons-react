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
		"content": `<style>.kaumyv2yg {
  fill: currentColor;
  d: path("M19 10h-6a3 3 0 0 0-3 3v8a1 1 0 0 1-1 1a5 5 0 0 1-3.536-1.464A4.98 4.98 0 0 1 4 17V7a5 5 0 0 1 5-5h4c.265 0 .52.105.707.293l6 6A1 1 0 0 1 19 10m-6-6v2a2 2 0 0 0 2 2h2Zm3 17a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0Zm2 0v-8a1 1 0 0 1 2 0v8a1 1 0 0 1-2 0");
}
</style><path class="kaumyv2yg"/>`,
		"fallback": "coolicons:file-pause-corner-fill-round",
	});
}

export default Component;
