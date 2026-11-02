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
		"content": `<style>.s4fgcfq9j {
  fill: currentColor;
  d: path("M4 5v6h6V5a1 1 0 0 1 2 0v14a1 1 0 0 1-2 0v-6H4v6a1 1 0 0 1-2 0V5a1 1 0 0 1 2 0m12 4v5h2V9a1 1 0 0 1 2 0v5h1a1 1 0 0 1 0 2h-1v3a1 1 0 0 1-2 0v-3h-3a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0");
}
</style><path class="s4fgcfq9j"/>`,
		"fallback": "coolicons:heading-4-fill",
	});
}

export default Component;
