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
		"content": `<style>.w5hko4rja {
  fill: currentColor;
  d: path("M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m1.5 0a8.5 8.5 0 1 0 17 0a8.5 8.5 0 0 0-17 0m6.47 4.53a.75.75 0 0 1 0-1.06L13.44 12L9.97 8.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0");
}
</style><path class="w5hko4rja"/>`,
		"fallback": "fluent:chevron-right-circle-24-regular",
	});
}

export default Component;
