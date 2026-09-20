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
		"content": `<style>.busmtn4wj {
  fill: currentColor;
  d: path("M231.73 221.94A8 8 0 0 1 224 232h-64a8 8 0 0 1-7.73-10a40 40 0 0 1 17.11-23.33a32 32 0 1 1 45.24 0a40 40 0 0 1 17.11 23.27M232 88v32a8 8 0 0 1-16 0V88H40v112h80.56a8 8 0 0 1 0 16H39.38A15.4 15.4 0 0 1 24 200.62V56a16 16 0 0 1 16-16h52.69A15.86 15.86 0 0 1 104 44.69L131.31 72H216a16 16 0 0 1 16 16M108.69 72l-16-16H40v16Z");
}
</style><path class="busmtn4wj"/>`,
		"fallback": "ph:folder-user-fill",
	});
}

export default Component;
