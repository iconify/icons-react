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
		"content": `<style>.h36lmjz7t {
  fill: currentColor;
  d: path("M40 56v144a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0m184 24H72a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h152a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16");
}
</style><path class="h36lmjz7t"/>`,
		"fallback": "ph:align-left-simple-fill",
	});
}

export default Component;
