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
		"content": `<style>.oqvj-xbhz {
  fill: currentColor;
  d: path("M14.5 3A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3zM4 14.5A1.5 1.5 0 0 0 5.5 16h9a1.5 1.5 0 0 0 1.5-1.5V7H4zm8.647-5.354a.5.5 0 1 1 .707.708l-4 4a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .63-.772l.078.064L9 12.794zM5.5 4A1.5 1.5 0 0 0 4 5.5V6h12v-.5A1.5 1.5 0 0 0 14.5 4z");
}
</style><path class="oqvj-xbhz"/>`,
		"fallback": "fluent:calendar-checkmark-center-20-regular",
	});
}

export default Component;
