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
		"content": `<style>.ex0rk5uzg {
  fill: currentColor;
  d: path("M218.83 82.83a4 4 0 0 1-5.66 0L172 41.66V168a60 60 0 0 1-120 0V80a4 4 0 0 1 8 0v88a52 52 0 0 0 104 0V41.66l-41.17 41.17a4 4 0 0 1-5.66-5.66l48-48a4 4 0 0 1 5.66 0l48 48a4 4 0 0 1 0 5.66");
}
</style><path class="ex0rk5uzg"/>`,
		"fallback": "ph:arrow-u-right-up-thin",
	});
}

export default Component;
