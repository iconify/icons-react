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
		"content": `<style>.epyks-d-m {
  fill: currentColor;
  d: path("M9 2v4a1 1 0 0 0 2 0V2h2v4a1 1 0 0 0 2 0V2h3a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-3v4a3 3 0 1 1-6 0v-4H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1ZM7 13h3a1 1 0 0 1 1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 1 1-1h3v-2H7Z");
}
</style><path class="epyks-d-m"/>`,
		"fallback": "coolicons:brush-fill-sharp",
	});
}

export default Component;
