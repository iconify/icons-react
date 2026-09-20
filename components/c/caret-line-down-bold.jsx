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
		"content": `<style>.fpxjt2gmy {
  fill: currentColor;
  d: path("M39.51 80.49a12 12 0 0 1 17-17L128 135l71.51-71.52a12 12 0 0 1 17 17l-80 80a12 12 0 0 1-17 0ZM208 180H48a12 12 0 0 0 0 24h160a12 12 0 0 0 0-24");
}
</style><path class="fpxjt2gmy"/>`,
		"fallback": "ph:caret-line-down-bold",
	});
}

export default Component;
