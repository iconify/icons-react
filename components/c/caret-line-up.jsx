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
		"content": `<style>.gxjw4kb9h {
  fill: currentColor;
  d: path("M213.66 197.66a8 8 0 0 1-11.32 0L128 123.31l-74.34 74.35a8 8 0 0 1-11.32-11.32l80-80a8 8 0 0 1 11.32 0l80 80a8 8 0 0 1 0 11.32M48 80h160a8 8 0 0 0 0-16H48a8 8 0 0 0 0 16");
}
</style><path class="gxjw4kb9h"/>`,
		"fallback": "ph:caret-line-up",
	});
}

export default Component;
