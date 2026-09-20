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
		"content": `<style>.wc9j8mbmd {
  fill: currentColor;
  d: path("M196.24 68.24L78.48 186H168a6 6 0 0 1 0 12H64a6 6 0 0 1-6-6V88a6 6 0 0 1 12 0v89.52L187.76 59.76a6 6 0 0 1 8.48 8.48");
}
</style><path class="wc9j8mbmd"/>`,
		"fallback": "ph:arrow-down-left-light",
	});
}

export default Component;
