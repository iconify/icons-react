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
		"content": `<style>.em2493igs {
  fill: currentColor;
  d: path("M136 80v43.47l36.12 21.67a8 8 0 0 1-8.24 13.72l-40-24A8 8 0 0 1 120 128V80a8 8 0 0 1 16 0m91.06-23.39a8 8 0 0 0-8.72 1.73L206 70.71c-3.23-3.51-6.56-7-10.1-10.59a96 96 0 1 0-2 137.7a8 8 0 0 0-11-11.64a80 80 0 1 1 1.64-114.78c3.54 3.58 6.87 7.1 10.11 10.63l-16.31 16.31A8 8 0 0 0 184 112h40a8 8 0 0 0 8-8V64a8 8 0 0 0-4.94-7.39");
}
</style><path class="em2493igs"/>`,
		"fallback": "ph:clock-clockwise-fill",
	});
}

export default Component;
