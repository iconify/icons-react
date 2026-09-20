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
		"content": `<style>.y10yqog7b {
  fill: currentColor;
  d: path("M189.66 122.34a8 8 0 0 1 0 11.32l-72 72a8 8 0 0 1-11.32-11.32L164.69 136H32a8 8 0 0 1 0-16h132.69l-58.35-58.34a8 8 0 0 1 11.32-11.32ZM216 32a8 8 0 0 0-8 8v176a8 8 0 0 0 16 0V40a8 8 0 0 0-8-8");
}
</style><path class="y10yqog7b"/>`,
		"fallback": "ph:arrow-line-right",
	});
}

export default Component;
