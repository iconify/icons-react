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
		"content": `<style>.fh6_xwolz {
  fill: currentColor;
  d: path("M196.24 196.24a6 6 0 0 1-8.48 0L70 78.48V168a6 6 0 0 1-12 0V64a6 6 0 0 1 6-6h104a6 6 0 0 1 0 12H78.48l117.76 117.76a6 6 0 0 1 0 8.48");
}
</style><path class="fh6_xwolz"/>`,
		"fallback": "ph:arrow-up-left-light",
	});
}

export default Component;
