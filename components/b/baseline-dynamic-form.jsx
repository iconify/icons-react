import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.q6pxkhb3l {
  fill: currentColor;
  d: path("M17 20v-9h-2V4h7l-2 5h2zm-2-7v7H4c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2zm-8.75 2.75h-1.5v1.5h1.5zM13 4v7H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM6.25 6.75h-1.5v1.5h1.5z");
}
</style><path class="q6pxkhb3l"/>`,
		"fallback": "ic:baseline-dynamic-form",
	});
}

export default Component;
