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
		"content": `<style>.p_9jn-38u {
  fill: currentColor;
  d: path("M126 112v88a6 6 0 0 1-12 0v-88a6 6 0 0 1 12 0m-46 34a6 6 0 0 0-6 6v48a6 6 0 0 0 12 0v-48a6 6 0 0 0-6-6m-40 40a6 6 0 0 0-6 6v8a6 6 0 0 0 12 0v-8a6 6 0 0 0-6-6");
}
</style><path class="p_9jn-38u"/>`,
		"fallback": "ph:cell-signal-medium-light",
	});
}

export default Component;
