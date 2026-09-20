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
		"content": `<style>.wlyvc4bxy {
  fill: currentColor;
  d: path("M212.24 131.76a6 6 0 0 1 0 8.48l-80 80a6 6 0 0 1-8.48 0l-80-80a6 6 0 0 1 8.48-8.48L128 207.51l75.76-75.75a6 6 0 0 1 8.48 0m-88.48 8.48a6 6 0 0 0 8.48 0l80-80a6 6 0 0 0-8.48-8.48L128 127.51L52.24 51.76a6 6 0 0 0-8.48 8.48Z");
}
</style><path class="wlyvc4bxy"/>`,
		"fallback": "ph:caret-double-down-light",
	});
}

export default Component;
