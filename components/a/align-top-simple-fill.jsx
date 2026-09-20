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
		"content": `<style>.ta9q4p8ik {
  fill: currentColor;
  d: path("M208 32a8 8 0 0 1-8 8H56a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8m-48 24H96a16 16 0 0 0-16 16v152a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V72a16 16 0 0 0-16-16");
}
</style><path class="ta9q4p8ik"/>`,
		"fallback": "ph:align-top-simple-fill",
	});
}

export default Component;
