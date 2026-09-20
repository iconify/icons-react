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
		"content": `<style>.kk348caxc {
  fill: currentColor;
  d: path("M220 144v64a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4v-64a4 4 0 0 1 8 0v60h168v-60a4 4 0 0 1 8 0m-94.83 2.83a4 4 0 0 0 5.66 0l40-40a4 4 0 1 0-5.66-5.66L132 134.34V32a4 4 0 0 0-8 0v102.34l-33.17-33.17a4 4 0 0 0-5.66 5.66Z");
}
</style><path class="kk348caxc"/>`,
		"fallback": "ph:download-simple-thin",
	});
}

export default Component;
