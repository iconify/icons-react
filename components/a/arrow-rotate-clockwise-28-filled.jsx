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
		"content": `<style>.ed56wjb2r {
  fill: currentColor;
  d: path("M14 3c6.075 0 11 4.925 11 11a10.98 10.98 0 0 1-4.683 9H22.5a1 1 0 1 1 0 2H18a1 1 0 0 1-1-1v-4.5a1 1 0 1 1 2 0v1.98A8.99 8.99 0 0 0 23 14a9 9 0 1 0-18 0a1 1 0 1 1-2 0C3 7.925 7.925 3 14 3m0 7a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4");
}
</style><path class="ed56wjb2r"/>`,
		"fallback": "fluent:arrow-rotate-clockwise-28-filled",
	});
}

export default Component;
