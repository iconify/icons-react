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
		"content": `<style>.bb-pw_h2a {
  fill: currentColor;
  d: path("m242.83 77.17l-32-32a4 4 0 0 0-5.66 5.66L230.34 76H208c-46.67 0-57.84 26.81-67.69 50.46c-9.46 22.69-18.4 44.16-56.55 45.48a36 36 0 1 0 0 8c43.49-1.42 54.33-27.39 63.91-50.39C157.45 106.12 166.67 84 208 84h22.34l-25.17 25.17a4 4 0 0 0 5.66 5.66l32-32a4 4 0 0 0 0-5.66M48 204a28 28 0 1 1 28-28a28 28 0 0 1-28 28");
}
</style><path class="bb-pw_h2a"/>`,
		"fallback": "ph:flow-arrow-thin",
	});
}

export default Component;
