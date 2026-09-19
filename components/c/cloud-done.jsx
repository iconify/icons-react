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
		"content": `<style>.ew8-16byi {
  fill: currentColor;
  d: path("M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96M10 17l-3.5-3.5l1.41-1.41L10 14.17L15.18 9l1.41 1.41z");
}
</style><path class="ew8-16byi"/>`,
		"fallback": "ic:cloud-done",
	});
}

export default Component;
