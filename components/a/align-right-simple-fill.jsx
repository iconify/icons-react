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
		"content": `<style>.g-mzr-2vs {
  fill: currentColor;
  d: path("M232 56v144a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0m-48 24H32a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h152a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16");
}
</style><path class="g-mzr-2vs"/>`,
		"fallback": "ph:align-right-simple-fill",
	});
}

export default Component;
