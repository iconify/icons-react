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
		"content": `<style>.twfwd6bxc {
  fill: currentColor;
  d: path("M2.22 2.22a.75.75 0 0 1 1.06 0l18.5 18.5a.75.75 0 0 1-1.06 1.06l-2.201-2.2A9.96 9.96 0 0 1 12 22C6.477 22 2 17.523 2 12a9.96 9.96 0 0 1 2.419-6.52l-2.2-2.2a.75.75 0 0 1 0-1.06m3.262 4.323a8.5 8.5 0 0 0 11.973 11.973zM12 2c5.523 0 10 4.477 10 10a9.95 9.95 0 0 1-1.52 5.298l-1.094-1.094a8.5 8.5 0 0 0-11.59-11.59L6.7 3.52A9.95 9.95 0 0 1 12 2");
}
</style><path class="twfwd6bxc"/>`,
		"fallback": "fluent:circle-off-24-regular",
	});
}

export default Component;
