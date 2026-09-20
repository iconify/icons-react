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
		"content": `<style>.vx5mk2b2k {
  fill: currentColor;
  d: path("M124 112v88a4 4 0 0 1-8 0v-88a4 4 0 0 1 8 0m-44 36a4 4 0 0 0-4 4v48a4 4 0 0 0 8 0v-48a4 4 0 0 0-4-4m-40 40a4 4 0 0 0-4 4v8a4 4 0 0 0 8 0v-8a4 4 0 0 0-4-4");
}
</style><path class="vx5mk2b2k"/>`,
		"fallback": "ph:cell-signal-medium-thin",
	});
}

export default Component;
