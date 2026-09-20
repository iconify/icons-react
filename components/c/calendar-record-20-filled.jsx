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
		"content": `<style>.bb5xv1b-z {
  fill: currentColor;
  d: path("M17 7v2.6A5.5 5.5 0 0 0 9.6 17H5.5A2.5 2.5 0 0 1 3 14.5V7zm-2.5-4A2.5 2.5 0 0 1 17 5.5V6H3v-.5A2.5 2.5 0 0 1 5.5 3zm0 8a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7m0 8a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m2.5-4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0");
}
</style><path class="bb5xv1b-z"/>`,
		"fallback": "fluent:calendar-record-20-filled",
	});
}

export default Component;
