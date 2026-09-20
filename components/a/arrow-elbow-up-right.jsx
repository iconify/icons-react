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
		"content": `<style>.db9b62b4q {
  fill: currentColor;
  d: path("m221.66 85.66l-48 48a8 8 0 0 1-11.32-11.32L196.69 88H80v136a8 8 0 0 1-16 0V80a8 8 0 0 1 8-8h124.69l-34.35-34.34a8 8 0 0 1 11.32-11.32l48 48a8 8 0 0 1 0 11.32");
}
</style><path class="db9b62b4q"/>`,
		"fallback": "ph:arrow-elbow-up-right",
	});
}

export default Component;
