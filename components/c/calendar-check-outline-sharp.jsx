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
		"content": `<style>.qmmd25bio {
  fill: currentColor;
  d: path("M3 22V4h3V2h2v2h8V2h2v2h3v8.375l-2 2V10H5v10h6.2l2 2zM5 8h14V6H5zm0 0V6zm11.55 14.5L13 18.95l1.4-1.4l2.125 2.125l4.25-4.25l1.4 1.425z");
}
</style><path class="qmmd25bio"/>`,
		"fallback": "material-symbols:calendar-check-outline-sharp",
	});
}

export default Component;
