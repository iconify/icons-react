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
		"content": `<style>.ufqvlob5j {
  fill: currentColor;
  d: path("M8 2h8a1 1 0 0 1 1 1v3.099A5.01 5.01 0 0 1 21 11v1H3v-1a5.01 5.01 0 0 1 4-4.901V3a1 1 0 0 1 1-1m7 4V4H9v2ZM3 14h18v5a1 1 0 0 1-1 1h-3v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1H4a1 1 0 0 1-1-1Z");
}
</style><path class="ufqvlob5j"/>`,
		"fallback": "coolicons:gas-cylinder-fill-sharp",
	});
}

export default Component;
