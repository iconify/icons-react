import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.yobuseb5d {
  fill: currentColor;
  d: path("M5.5 17H10v-2a2 2 0 0 1 3-1.732V11a2 2 0 1 1 4 0V7H3v7.5A2.5 2.5 0 0 0 5.5 17m9-14A2.5 2.5 0 0 1 17 5.5V6H3v-.5A2.5 2.5 0 0 1 5.5 3zm.5 7a1 1 0 0 0-1 1v7a1 1 0 1 0 2 0v-7a1 1 0 0 0-1-1m-3 4a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-1-1m5-1a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0z");
}
</style><path class="yobuseb5d"/>`,
		"fallback": "fluent:calendar-data-bar-20-filled",
	});
}

export default Component;
