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
		"content": `<style>.yp82w0b0n {
  fill: currentColor;
  d: path("M8 16.25c0 .414.335.75.75.75h7.5a.75.75 0 0 0 .75-.75v-7.5a.75.75 0 1 0-1.5 0v5.69L4.28 3.22a.75.75 0 1 0-1.06 1.06L14.44 15.5H8.75a.75.75 0 0 0-.75.75");
}
</style><path class="yp82w0b0n"/>`,
		"fallback": "fluent:arrow-down-right-20-filled",
	});
}

export default Component;
