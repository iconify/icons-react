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
		"content": `<style>.eofa2-c6z {
  fill: currentColor;
  d: path("M21.901 8H8.099A5.01 5.01 0 0 1 13 4h4a5.01 5.01 0 0 1 4.901 4M5 7a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Zm17 3v5a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 20h-4a5 5 0 0 1-5-5v-5ZM5 11a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Zm9 2a1 1 0 0 0-2 0v3a1 1 0 0 0 2 0Zm4 3v-3a1 1 0 0 0-2 0v3a1 1 0 0 0 2 0M5 15a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Z");
}
</style><path class="eofa2-c6z"/>`,
		"fallback": "coolicons:data-packet-fill-round",
	});
}

export default Component;
