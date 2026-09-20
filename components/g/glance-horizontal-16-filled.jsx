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
		"content": `<style>.u0ch5ccxn {
  fill: currentColor;
  d: path("M3.75 2A1.75 1.75 0 0 0 2 3.75v2.5C2 7.216 2.784 8 3.75 8h3.5A1.75 1.75 0 0 0 9 6.25v-2.5A1.75 1.75 0 0 0 7.25 2zm5 7A1.75 1.75 0 0 0 7 10.75v1.5c0 .966.784 1.75 1.75 1.75h3.5A1.75 1.75 0 0 0 14 12.25v-1.5A1.75 1.75 0 0 0 12.25 9zm-5 0A1.75 1.75 0 0 0 2 10.75v1.5c0 .966.784 1.75 1.75 1.75h.5A1.75 1.75 0 0 0 6 12.25v-1.5A1.75 1.75 0 0 0 4.25 9zm8-7A1.75 1.75 0 0 0 10 3.75v2.5c0 .966.784 1.75 1.75 1.75h.5A1.75 1.75 0 0 0 14 6.25v-2.5A1.75 1.75 0 0 0 12.25 2z");
}
</style><path class="u0ch5ccxn"/>`,
		"fallback": "fluent:glance-horizontal-16-filled",
	});
}

export default Component;
