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
		"content": `<style>.tbmbblb5e {
  fill: currentColor;
  d: path("M232 216h-24V40a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v176H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16M64 40h128v176H64Zm104 92a12 12 0 1 1-12-12a12 12 0 0 1 12 12");
}
</style><path class="tbmbblb5e"/>`,
		"fallback": "ph:door",
	});
}

export default Component;
