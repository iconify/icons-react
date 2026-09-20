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
		"content": `<style>.ygk-39sha {
  fill: currentColor;
  d: path("M120.49 167.51a12 12 0 0 1 0 17l-32 32a12 12 0 0 1-17 0l-32-32a12 12 0 1 1 17-17L68 179V48a12 12 0 0 1 24 0v131l11.51-11.52a12 12 0 0 1 16.98.03m96-96l-32-32a12 12 0 0 0-17 0l-32 32a12 12 0 0 0 17 17L164 77v131a12 12 0 0 0 24 0V77l11.51 11.52a12 12 0 0 0 17-17Z");
}
</style><path class="ygk-39sha"/>`,
		"fallback": "ph:arrows-down-up-bold",
	});
}

export default Component;
