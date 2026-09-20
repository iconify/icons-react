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
		"content": `<style>.ki8c38b3v {
  fill: currentColor;
  d: path("M14.5 3A2.5 2.5 0 0 1 17 5.5V10h-1V7H4v7.5A1.5 1.5 0 0 0 5.5 16H9v1H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3zm0 1h-9A1.5 1.5 0 0 0 4 5.5V6h12v-.5A1.5 1.5 0 0 0 14.5 4M10 12.5a1.5 1.5 0 0 1 1.5-1.5h6a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5zm7 4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 .5-.5M12.5 13a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z");
}
</style><path class="ki8c38b3v"/>`,
		"fallback": "fluent:calendar-note-20-regular",
	});
}

export default Component;
