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
		"content": `<style>.zlw1xobkf {
  fill: currentColor;
  d: path("M224 216a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8m-88-40V80a16 16 0 0 1 16-16h40a16 16 0 0 1 16 16v96a16 16 0 0 1-16 16h-40a16 16 0 0 1-16-16m16 0h40V80h-40Zm-104 0V40a16 16 0 0 1 16-16h40a16 16 0 0 1 16 16v136a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16m16 0h40V40H64Z");
}
</style><path class="zlw1xobkf"/>`,
		"fallback": "ph:align-bottom",
	});
}

export default Component;
