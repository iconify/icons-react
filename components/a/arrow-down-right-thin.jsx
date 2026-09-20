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
		"content": `<style>.l37tl9bao {
  fill: currentColor;
  d: path("M196 88v104a4 4 0 0 1-4 4H88a4 4 0 0 1 0-8h94.34L61.17 66.83a4 4 0 0 1 5.66-5.66L188 182.34V88a4 4 0 0 1 8 0");
}
</style><path class="l37tl9bao"/>`,
		"fallback": "ph:arrow-down-right-thin",
	});
}

export default Component;
