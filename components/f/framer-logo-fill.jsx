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
		"content": `<style>.ie68oeb5k {
  fill: currentColor;
  d: path("M200 112h-51l56.27 50a8 8 0 0 1-5.27 14h-64v64a8 8 0 0 1-13.66 5.66l-72-72A8 8 0 0 1 48 168v-64a8 8 0 0 1 8-8h51L50.69 46A8 8 0 0 1 56 32h144a8 8 0 0 1 8 8v64a8 8 0 0 1-8 8");
}
</style><path class="ie68oeb5k"/>`,
		"fallback": "ph:framer-logo-fill",
	});
}

export default Component;
