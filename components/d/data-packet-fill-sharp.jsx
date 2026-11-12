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
		"content": `<style>.s9kg02b7m {
  fill: currentColor;
  d: path("M22 8H8V5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1ZM5 7a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Zm17 3v9a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-9ZM5 11a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Zm9 2a1 1 0 0 0-2 0v3a1 1 0 0 0 2 0Zm4 3v-3a1 1 0 0 0-2 0v3a1 1 0 0 0 2 0M5 15a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Z");
}
</style><path class="s9kg02b7m"/>`,
		"fallback": "coolicons:data-packet-fill-sharp",
	});
}

export default Component;
