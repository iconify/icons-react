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
		"content": `<style>.d85mb35xt {
  fill: currentColor;
  d: path("M210.83 197.17a4 4 0 0 1-5.66 5.66L128 125.66l-77.17 77.17a4 4 0 0 1-5.66-5.66l80-80a4 4 0 0 1 5.66 0Zm-160-74.34L128 45.66l77.17 77.17a4 4 0 1 0 5.66-5.66l-80-80a4 4 0 0 0-5.66 0l-80 80a4 4 0 0 0 5.66 5.66");
}
</style><path class="d85mb35xt"/>`,
		"fallback": "ph:caret-double-up-thin",
	});
}

export default Component;
