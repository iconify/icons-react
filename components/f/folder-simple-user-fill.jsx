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
		"content": `<style>.p69vqwb7j {
  fill: currentColor;
  d: path("M231.73 221.94A8 8 0 0 1 224 232h-64a8 8 0 0 1-7.73-10a40 40 0 0 1 17.11-23.33a32 32 0 1 1 45.24 0a40 40 0 0 1 17.11 23.27M216 72h-85.33l-27.74-20.8a16.12 16.12 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h80a8 8 0 0 0 0-16H40V64h53.33l27.74 20.8a16.12 16.12 0 0 0 9.6 3.2H216v32a8 8 0 0 0 16 0V88a16 16 0 0 0-16-16");
}
</style><path class="p69vqwb7j"/>`,
		"fallback": "ph:folder-simple-user-fill",
	});
}

export default Component;
