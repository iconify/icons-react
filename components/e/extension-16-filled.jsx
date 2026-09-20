import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.eygmr6t4k {
  fill: currentColor;
  d: path("M9 1a2 2 0 0 0-2 2H5.5A1.5 1.5 0 0 0 4 4.5V6a2 2 0 0 0 0 4v1.5A1.5 1.5 0 0 0 5.5 13H7a2 2 0 0 0 4 0h1.5a1.5 1.5 0 0 0 1.5-1.5V9h-1a1 1 0 1 1 0-2h1V4.5A1.5 1.5 0 0 0 12.5 3H11a2 2 0 0 0-2-2");
}
</style><path class="eygmr6t4k"/>`,
		"fallback": "fluent:extension-16-filled",
	});
}

export default Component;
