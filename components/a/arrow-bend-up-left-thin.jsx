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
		"content": `<style>.bjw7dzbno {
  fill: currentColor;
  d: path("M228 200a4 4 0 0 1-8 0a92.1 92.1 0 0 0-92-92H41.66l41.17 41.17a4 4 0 0 1-5.66 5.66l-48-48a4 4 0 0 1 0-5.66l48-48a4 4 0 0 1 5.66 5.66L41.66 100H128a100.11 100.11 0 0 1 100 100");
}
</style><path class="bjw7dzbno"/>`,
		"fallback": "ph:arrow-bend-up-left-thin",
	});
}

export default Component;
