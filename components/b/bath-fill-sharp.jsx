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
		"content": `<style>.f97gd8bcn {
  fill: currentColor;
  d: path("M4 4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V5H6v6h15a1 1 0 0 1 0 2h-1v5a1 1 0 0 1-1 1h-2v1a1 1 0 0 1-2 0v-1H9v1a1 1 0 0 1-2 0v-1H5a1 1 0 0 1-1-1v-5H3a1 1 0 0 1 0-2h1Z");
}
</style><path class="f97gd8bcn"/>`,
		"fallback": "coolicons:bath-fill-sharp",
	});
}

export default Component;
