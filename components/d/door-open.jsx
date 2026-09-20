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
		"content": `<style>.gty8vqjcc {
  fill: currentColor;
  d: path("M232 216h-24V40a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v176H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16m-40 0h-16V40h16ZM64 40h96v176H64Zm80 92a12 12 0 1 1-12-12a12 12 0 0 1 12 12");
}
</style><path class="gty8vqjcc"/>`,
		"fallback": "ph:door-open",
	});
}

export default Component;
