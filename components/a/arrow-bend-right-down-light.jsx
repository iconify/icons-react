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
		"content": `<style>.upiyobcua {
  fill: currentColor;
  d: path("m204.24 180.24l-48 48a6 6 0 0 1-8.48 0l-48-48a6 6 0 0 1 8.48-8.48L146 209.51V128a90.1 90.1 0 0 0-90-90a6 6 0 0 1 0-12a102.12 102.12 0 0 1 102 102v81.51l37.76-37.75a6 6 0 0 1 8.48 8.48");
}
</style><path class="upiyobcua"/>`,
		"fallback": "ph:arrow-bend-right-down-light",
	});
}

export default Component;
