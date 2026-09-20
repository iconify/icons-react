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
		"content": `<style>.vwhaddbsm {
  fill: currentColor;
  d: path("M197.66 197.66a8 8 0 0 1-11.32 0L116 127.31l-46.34 46.35A8 8 0 0 1 56 168V64a8 8 0 0 1 8-8h104a8 8 0 0 1 5.66 13.66L127.31 116l70.35 70.34a8 8 0 0 1 0 11.32");
}
</style><path class="vwhaddbsm"/>`,
		"fallback": "ph:arrow-up-left-fill",
	});
}

export default Component;
