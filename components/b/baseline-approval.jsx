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
		"content": `<style>.rdq570b7h {
  fill: currentColor;
  d: path("M4 16v6h16v-6c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2m14 2H6v-2h12zM12 2C9.24 2 7 4.24 7 7l5 7l5-7c0-2.76-2.24-5-5-5m0 9L9 7c0-1.66 1.34-3 3-3s3 1.34 3 3z");
}
</style><path class="rdq570b7h"/>`,
		"fallback": "ic:baseline-approval",
	});
}

export default Component;
