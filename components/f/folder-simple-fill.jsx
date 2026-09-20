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
		"content": `<style>.nqk-_gb7n {
  fill: currentColor;
  d: path("M232 88v112.89A15.13 15.13 0 0 1 216.89 216H40a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h53.33a16.12 16.12 0 0 1 9.6 3.2L130.67 72H216a16 16 0 0 1 16 16");
}
</style><path class="nqk-_gb7n"/>`,
		"fallback": "ph:folder-simple-fill",
	});
}

export default Component;
