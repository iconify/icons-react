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
		"content": `<style>.s-xjrwb5o {
  fill: currentColor;
  d: path("M243.94 31.3a4 4 0 0 0-4.64-3.24l-224 40A4 4 0 0 0 16 76a4 4 0 0 0 .7-.06L124 56.78V100H64a28 28 0 0 0-28 28v64a28 28 0 0 0 28 28h128a28 28 0 0 0 28-28v-64a28 28 0 0 0-28-28h-60V55.35l108.7-19.41a4 4 0 0 0 3.24-4.64M100 164v-56h56v56Zm-36-56h28v56H44v-36a20 20 0 0 1 20-20m128 104H64a20 20 0 0 1-20-20v-20h168v20a20 20 0 0 1-20 20m20-84v36h-48v-56h28a20 20 0 0 1 20 20");
}
</style><path class="s-xjrwb5o"/>`,
		"fallback": "ph:cable-car-thin",
	});
}

export default Component;
