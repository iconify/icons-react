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
		"content": `<style>.lcl8jcc6l {
  fill: currentColor;
  d: path("M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17H10v-1H5.5A1.5 1.5 0 0 1 4 14.5V7h12v2.268A2 2 0 0 1 17 11zM5.5 4h9A1.5 1.5 0 0 1 16 5.5V6H4v-.5A1.5 1.5 0 0 1 5.5 4m9.5 6a1 1 0 0 0-1 1v7a1 1 0 1 0 2 0v-7a1 1 0 0 0-1-1m-3 4a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-1-1m5-1a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0z");
}
</style><path class="lcl8jcc6l"/>`,
		"fallback": "fluent:calendar-data-bar-20-regular",
	});
}

export default Component;
