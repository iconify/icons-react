import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.pi6-_n-9g {
  fill: currentColor;
  d: path("M220 104a4 4 0 0 1-8 0V49.66l-73.16 73.17a4 4 0 0 1-5.66-5.66L206.34 44H152a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4Zm-36 28a4 4 0 0 0-4 4v72a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h72a4 4 0 0 0 0-8H48a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h128a12 12 0 0 0 12-12v-72a4 4 0 0 0-4-4");
}
</style><path class="pi6-_n-9g"/>`,
		"fallback": "ph:arrow-square-out-thin",
	});
}

export default Component;
