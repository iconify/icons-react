import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.yv0mv-w8y {
  fill: currentColor;
  d: path("M10 7.998a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0M7.598 2.01A.5.5 0 0 0 7 2.5v10.997a.5.5 0 0 0 .598.49l5-1a.5.5 0 0 0 .402-.49V3.5a.5.5 0 0 0-.402-.49zM8 12.887V3.11l4 .8v8.177zm-2 .11v-1H4V4h2V3H3.5a.5.5 0 0 0-.5.5v8.997a.5.5 0 0 0 .5.5z");
}
</style><path class="yv0mv-w8y"/>`,
		"fallback": "fluent:conference-room-16-regular",
	});
}

export default Component;
