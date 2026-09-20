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
		"content": `<style>.brsby7tqs {
  fill: currentColor;
  d: path("M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m42.83-78.83a4 4 0 0 1-5.66 5.66L128 109.66l-37.17 37.17a4 4 0 0 1-5.66-5.66l40-40a4 4 0 0 1 5.66 0Z");
}
</style><path class="brsby7tqs"/>`,
		"fallback": "ph:caret-circle-up-thin",
	});
}

export default Component;
