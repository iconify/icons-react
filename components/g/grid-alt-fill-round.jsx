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
		"content": `<style>.gj14bacvx {
  fill: currentColor;
  d: path("M8 8H3a5 5 0 0 1 5-5Zm2 0V3h4v5Zm6 0V3a5 5 0 0 1 5 5ZM3 10h5v4H3Zm11 0v4h-4v-4Zm7 4h-5v-4h5ZM8 16v5a5 5 0 0 1-5-5Zm2 5v-5h4v5Zm6 0v-5h5a5 5 0 0 1-1.464 3.536A5 5 0 0 1 16 21");
}
</style><path class="gj14bacvx"/>`,
		"fallback": "coolicons:grid-alt-fill-round",
	});
}

export default Component;
