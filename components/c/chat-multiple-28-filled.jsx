import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gd3annrjy {
  fill: currentColor;
  d: path("M11 3a9 9 0 0 0-8.048 13.032l-.908 3.389a1.25 1.25 0 0 0 1.53 1.53l3.387-.906A9 9 0 1 0 11 3m6 22a8.98 8.98 0 0 1-6.732-3.026a10 10 0 0 0 2.109-.068A7.47 7.47 0 0 0 17 23.5a7.46 7.46 0 0 0 3.59-.914a.75.75 0 0 1 .555-.066l3.25.87l-.872-3.252a.75.75 0 0 1 .066-.553A7.5 7.5 0 0 0 24.5 16a7.5 7.5 0 0 0-3.825-6.54a10 10 0 0 0-.75-1.974a9.004 9.004 0 0 1 5.123 12.547l.908 3.388a1.25 1.25 0 0 1-1.531 1.53l-3.386-.906A9 9 0 0 1 17 25");
}
</style><path class="gd3annrjy"/>`,
		"fallback": "fluent:chat-multiple-28-filled",
	});
}

export default Component;
