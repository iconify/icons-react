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
		"content": `<style>.aqlogbb8b {
  fill: currentColor;
  d: path("M8 8V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v9h5a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Zm4-2a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Zm-4 4H4v10h4Zm4 0a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Zm-6 2h.01a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2m6.01 2H12a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2M16 20h4v-6h-4ZM6 16h.01a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2m12 0h.01a1 1 0 0 1 0 2H18a1 1 0 0 1 0-2");
}
</style><path class="aqlogbb8b"/>`,
		"fallback": "coolicons:city-fill-sharp",
	});
}

export default Component;
