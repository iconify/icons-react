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
		"content": `<style>.ap7vpubrc {
  fill: currentColor;
  d: path("M200.12 55.87A102 102 0 0 0 55.87 200.12A102 102 0 1 0 200.12 55.87m-8.48 135.77a90 90 0 1 1 0-127.28a90.1 90.1 0 0 1 0 127.28m-27.4-27.88a6 6 0 1 1-8.48 8.48L128 144.49l-27.76 27.75a6 6 0 0 1-8.48-8.48l32-32a6 6 0 0 1 8.48 0Zm0-56a6 6 0 1 1-8.48 8.48L128 88.49l-27.76 27.75a6 6 0 0 1-8.48-8.48l32-32a6 6 0 0 1 8.48 0Z");
}
</style><path class="ap7vpubrc"/>`,
		"fallback": "ph:caret-circle-double-up-light",
	});
}

export default Component;
