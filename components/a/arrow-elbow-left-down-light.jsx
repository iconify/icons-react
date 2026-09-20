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
		"content": `<style>.v8ct22btm {
  fill: currentColor;
  d: path("M238 72a6 6 0 0 1-6 6H94v123.51l37.76-37.75a6 6 0 0 1 8.48 8.48l-48 48a6 6 0 0 1-8.48 0l-48-48a6 6 0 0 1 8.48-8.48L82 201.51V72a6 6 0 0 1 6-6h144a6 6 0 0 1 6 6");
}
</style><path class="v8ct22btm"/>`,
		"fallback": "ph:arrow-elbow-left-down-light",
	});
}

export default Component;
