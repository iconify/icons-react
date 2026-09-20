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
		"content": `<style>.xwrxm6b6v {
  fill: currentColor;
  d: path("m211 130.66l-29.8-84.19a56 56 0 0 0-106-1.14l-29.51 83.5A88 88 0 1 0 211 130.66M128 200a40 40 0 1 1 40-40a40 40 0 0 1-40 40");
}
</style><path class="xwrxm6b6v"/>`,
		"fallback": "ph:avocado-fill",
	});
}

export default Component;
