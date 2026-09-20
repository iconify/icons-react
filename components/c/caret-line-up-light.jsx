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
		"content": `<style>.zamvyu77x {
  fill: currentColor;
  d: path("M212.24 196.24a6 6 0 0 1-8.48 0L128 120.49l-75.76 75.75a6 6 0 0 1-8.48-8.48l80-80a6 6 0 0 1 8.48 0l80 80a6 6 0 0 1 0 8.48M48 78h160a6 6 0 0 0 0-12H48a6 6 0 0 0 0 12");
}
</style><path class="zamvyu77x"/>`,
		"fallback": "ph:caret-line-up-light",
	});
}

export default Component;
