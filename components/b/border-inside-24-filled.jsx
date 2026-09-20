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
		"content": `<style>.wntczfxgr {
  fill: currentColor;
  d: path("M13 5a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2zm-9 5a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m16 0a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1m-6 10a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1M6 3a1 1 0 0 1 0 2a1 1 0 0 0-1 1a1 1 0 0 1-2 0a3 3 0 0 1 3-3m11 1a1 1 0 0 1 1-1a3 3 0 0 1 3 3a1 1 0 1 1-2 0a1 1 0 0 0-1-1a1 1 0 0 1-1-1M6 21a1 1 0 1 0 0-2a1 1 0 0 1-1-1a1 1 0 1 0-2 0a3 3 0 0 0 3 3m11-1a1 1 0 0 0 1 1a3 3 0 0 0 3-3a1 1 0 1 0-2 0a1 1 0 0 1-1 1a1 1 0 0 0-1 1M13 7a1 1 0 1 0-2 0v4H7a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4z");
}
</style><path class="wntczfxgr"/>`,
		"fallback": "fluent:border-inside-24-filled",
	});
}

export default Component;
