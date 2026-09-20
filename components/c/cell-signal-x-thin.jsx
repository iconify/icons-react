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
		"content": `<style>.l2kjfubhz {
  fill: currentColor;
  d: path("M210.83 197.17a4 4 0 0 1-5.66 5.66L184 181.66l-21.17 21.17a4 4 0 0 1-5.66-5.66L178.34 176l-21.17-21.17a4 4 0 0 1 5.66-5.66L184 170.34l21.17-21.17a4 4 0 0 1 5.66 5.66L189.66 176ZM160 116a4 4 0 0 0 4-4V72a4 4 0 0 0-8 0v40a4 4 0 0 0 4 4m40 0a4 4 0 0 0 4-4V32a4 4 0 0 0-8 0v80a4 4 0 0 0 4 4m-80-8a4 4 0 0 0-4 4v88a4 4 0 0 0 8 0v-88a4 4 0 0 0-4-4m-40 40a4 4 0 0 0-4 4v48a4 4 0 0 0 8 0v-48a4 4 0 0 0-4-4m-40 40a4 4 0 0 0-4 4v8a4 4 0 0 0 8 0v-8a4 4 0 0 0-4-4");
}
</style><path class="l2kjfubhz"/>`,
		"fallback": "ph:cell-signal-x-thin",
	});
}

export default Component;
