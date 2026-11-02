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
		"content": `<style>.bvaohjbje {
  fill: currentColor;
  d: path("M6 4h2a2 2 0 0 1 2 2v5h4V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-5h-4v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2V6a2 2 0 0 1 2-2");
}
</style><path class="bvaohjbje"/>`,
		"fallback": "coolicons:dumbbell-fill",
	});
}

export default Component;
