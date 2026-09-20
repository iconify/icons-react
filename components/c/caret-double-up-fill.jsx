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
		"content": `<style>.xu7hx9q4l {
  fill: currentColor;
  d: path("M213.66 194.34A8 8 0 0 1 208 208H48a8 8 0 0 1-5.66-13.66L108.69 128H48a8 8 0 0 1-5.66-13.66l80-80a8 8 0 0 1 11.32 0l80 80A8 8 0 0 1 208 128h-60.69Z");
}
</style><path class="xu7hx9q4l"/>`,
		"fallback": "ph:caret-double-up-fill",
	});
}

export default Component;
