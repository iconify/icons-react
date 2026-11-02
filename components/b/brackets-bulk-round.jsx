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
		"content": `<style>.id3zm3bbq {
  fill: currentColor;
  d: path("M6 8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1a1 1 0 0 1 0 2H6a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h1a1 1 0 0 1 0 2Zm12-2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-1a1 1 0 0 1 0-2h1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-1a1 1 0 0 1 0-2Z");
}
</style><path class="id3zm3bbq"/>`,
		"fallback": "coolicons:brackets-bulk-round",
	});
}

export default Component;
