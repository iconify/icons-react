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
		"content": `<style>.sq3vpcbhs {
  fill: currentColor;
  d: path("M248 128a8 8 0 0 1-8 8h-24.37A88.13 88.13 0 0 1 136 215.63V240a8 8 0 0 1-16 0v-24.37A88.13 88.13 0 0 1 40.37 136H16a8 8 0 0 1 0-16h24.37A88.13 88.13 0 0 1 120 40.37V16a8 8 0 0 1 16 0v24.37A88.13 88.13 0 0 1 215.63 120H240a8 8 0 0 1 8 8");
}
</style><path class="sq3vpcbhs"/>`,
		"fallback": "ph:gps-fill",
	});
}

export default Component;
