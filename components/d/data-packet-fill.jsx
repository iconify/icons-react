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
		"content": `<style>.dgaf5pphe {
  fill: currentColor;
  d: path("M22 8H8V7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3ZM5 7a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Zm17 3v7a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3v-7ZM5 11a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Zm9 2a1 1 0 0 0-2 0v3a1 1 0 0 0 2 0Zm4 3v-3a1 1 0 0 0-2 0v3a1 1 0 0 0 2 0M5 15a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Z");
}
</style><path class="dgaf5pphe"/>`,
		"fallback": "coolicons:data-packet-fill",
	});
}

export default Component;
