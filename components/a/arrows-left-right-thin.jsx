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
		"content": `<style>.xijfvse7w {
  fill: currentColor;
  d: path("M210.83 173.17a4 4 0 0 1 0 5.66l-32 32a4 4 0 0 1-5.66-5.66L198.34 180H48a4 4 0 0 1 0-8h150.34l-25.17-25.17a4 4 0 0 1 5.66-5.66ZM77.17 114.83a4 4 0 0 0 5.66-5.66L57.66 84H208a4 4 0 0 0 0-8H57.66l25.17-25.17a4 4 0 0 0-5.66-5.66l-32 32a4 4 0 0 0 0 5.66Z");
}
</style><path class="xijfvse7w"/>`,
		"fallback": "ph:arrows-left-right-thin",
	});
}

export default Component;
