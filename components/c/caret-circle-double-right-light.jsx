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
		"content": `<style>.uq9k3gnxe {
  fill: currentColor;
  d: path("M200.12 55.87A102 102 0 0 0 55.87 200.12A102 102 0 1 0 200.12 55.87m-8.48 135.77a90 90 0 1 1 0-127.28a90.1 90.1 0 0 1 0 127.28m-67.4-67.88a6 6 0 0 1 0 8.48l-32 32a6 6 0 0 1-8.48-8.48L111.51 128l-27.75-27.76a6 6 0 0 1 8.48-8.48Zm56 0a6 6 0 0 1 0 8.48l-32 32a6 6 0 0 1-8.48-8.48L167.51 128l-27.75-27.76a6 6 0 0 1 8.48-8.48Z");
}
</style><path class="uq9k3gnxe"/>`,
		"fallback": "ph:caret-circle-double-right-light",
	});
}

export default Component;
