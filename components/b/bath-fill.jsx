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
		"content": `<style>.fj1ylbb8f {
  fill: currentColor;
  d: path("M4 6a3 3 0 1 1 6 0a1 1 0 0 1-2 0a1.001 1.001 0 0 0-2 0v5h15a1 1 0 0 1 0 2h-1v3a3 3 0 0 1-3 3v1a1 1 0 0 1-2 0v-1H9v1a1 1 0 0 1-2 0v-1a3 3 0 0 1-3-3v-3H3a1 1 0 0 1 0-2h1Z");
}
</style><path class="fj1ylbb8f"/>`,
		"fallback": "coolicons:bath-fill",
	});
}

export default Component;
