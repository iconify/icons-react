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
		"content": `<style>.emxppbcld {
  fill: currentColor;
  d: path("M200 88v104a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h84.69L58.34 69.66a8 8 0 0 1 11.32-11.32L184 172.69V88a8 8 0 0 1 16 0");
}
</style><path class="emxppbcld"/>`,
		"fallback": "ph:arrow-down-right",
	});
}

export default Component;
