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
		"content": `<style>.ep_ihac0v {
  fill: currentColor;
  d: path("M3 10a2 2 0 0 1 2-2h6V5a1.25 1.25 0 0 1 .14-.582c.371-.712 1.242-.835 1.932-.549c.237.098.453.242.635.424l6 6a2.414 2.414 0 0 1 0 3.414l-6 6a2 2 0 0 1-.635.424c-.69.286-1.561.163-1.932-.549A1.25 1.25 0 0 1 11 19v-3H5a2 2 0 0 1-2-2Z");
}
</style><path class="ep_ihac0v"/>`,
		"fallback": "coolicons:arrow-big-right-fill",
	});
}

export default Component;
