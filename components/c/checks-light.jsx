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
		"content": `<style>.rkc5sabxd {
  fill: currentColor;
  d: path("m148.2 84.28l-89.6 88a6 6 0 0 1-8.4 0l-38.4-37.71a6 6 0 1 1 8.4-8.57l34.2 33.58l85.4-83.87a6 6 0 1 1 8.4 8.56Zm96.08-8.48a6 6 0 0 0-8.48-.08l-85.4 83.87l-20.23-19.87a6 6 0 1 0-8.41 8.56l24.44 24a6 6 0 0 0 8.4 0l89.6-88a6 6 0 0 0 .08-8.48");
}
</style><path class="rkc5sabxd"/>`,
		"fallback": "ph:checks-light",
	});
}

export default Component;
