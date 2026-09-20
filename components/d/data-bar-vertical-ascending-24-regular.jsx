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
		"content": `<style>.vn3s3qb5h {
  fill: currentColor;
  d: path("M18.251 3a2.25 2.25 0 0 0-2.249 2.25v13.5a2.249 2.249 0 1 0 4.498 0V5.25A2.25 2.25 0 0 0 18.251 3m-6.5 4a2.25 2.25 0 0 0-2.249 2.25v9.5a2.249 2.249 0 1 0 4.498 0v-9.5A2.25 2.25 0 0 0 11.751 7m-6.5 4a2.25 2.25 0 0 0-2.25 2.25v5.5a2.25 2.25 0 1 0 4.5 0v-5.5A2.25 2.25 0 0 0 5.25 11m13-6.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-1.499 0V5.25c0-.415.335-.75.749-.75m-6.5 4a.75.75 0 0 1 .75.75v9.5a.75.75 0 0 1-1.499 0v-9.5c0-.415.335-.75.749-.75m-6.5 4a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0v-5.5a.75.75 0 0 1 .75-.75");
}
</style><path class="vn3s3qb5h"/>`,
		"fallback": "fluent:data-bar-vertical-ascending-24-regular",
	});
}

export default Component;
