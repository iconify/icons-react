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
		"content": `<style>.smdf5jbao {
  fill: currentColor;
  d: path("M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m42.83-110.83a4 4 0 0 1 0 5.66l-40 40a4 4 0 0 1-5.66 0l-40-40a4 4 0 0 1 5.66-5.66L128 146.34l37.17-37.17a4 4 0 0 1 5.66 0");
}
</style><path class="smdf5jbao"/>`,
		"fallback": "ph:caret-circle-down-thin",
	});
}

export default Component;
