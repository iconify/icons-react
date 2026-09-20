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
		"content": `<style>.kt-qn7bou {
  fill: currentColor;
  d: path("M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m48.49-108.49a12 12 0 0 1 0 17l-40 40a12 12 0 0 1-17 0l-40-40a12 12 0 0 1 17-17L128 135l31.51-31.52a12 12 0 0 1 16.98.03");
}
</style><path class="kt-qn7bou"/>`,
		"fallback": "ph:caret-circle-down-bold",
	});
}

export default Component;
