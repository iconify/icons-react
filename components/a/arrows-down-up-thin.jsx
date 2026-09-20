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
		"content": `<style>.bh8c0gi6u {
  fill: currentColor;
  d: path("M114.83 173.17a4 4 0 0 1 0 5.66l-32 32a4 4 0 0 1-5.66 0l-32-32a4 4 0 0 1 5.66-5.66L76 198.34V48a4 4 0 0 1 8 0v150.34l25.17-25.17a4 4 0 0 1 5.66 0m96-96l-32-32a4 4 0 0 0-5.66 0l-32 32a4 4 0 0 0 5.66 5.66L172 57.66V208a4 4 0 0 0 8 0V57.66l25.17 25.17a4 4 0 1 0 5.66-5.66");
}
</style><path class="bh8c0gi6u"/>`,
		"fallback": "ph:arrows-down-up-thin",
	});
}

export default Component;
