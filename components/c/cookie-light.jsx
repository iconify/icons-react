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
		"content": `<style>.j5vo3acnq {
  fill: currentColor;
  d: path("M163.07 164.93a10 10 0 1 1-14.14 0a10 10 0 0 1 14.14 0m-78.14-8a10 10 0 1 0 14.14 0a10 10 0 0 0-14.14 0m6.14-41.86a10 10 0 1 0-14.14 0a10 10 0 0 0 14.14 0m33.86 1.86a10 10 0 1 0 14.14 0a10 10 0 0 0-14.14 0M230 128A102 102 0 1 1 128 26a6 6 0 0 1 6 6a42 42 0 0 0 42 42a6 6 0 0 1 6 6a42 42 0 0 0 42 42a6 6 0 0 1 6 6m-12.18 5.65A54.09 54.09 0 0 1 170.3 85.7a54.09 54.09 0 0 1-48-47.53a90 90 0 1 0 95.47 95.48Z");
}
</style><path class="j5vo3acnq"/>`,
		"fallback": "ph:cookie-light",
	});
}

export default Component;
