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
		"content": `<style>.yzvn5pdok {
  fill: currentColor;
  d: path("M200 76h-44V32a12 12 0 0 0-12-12h-32a12 12 0 0 0-12 12v44H56a12 12 0 0 0-12 12v32a12 12 0 0 0 12 12h44v92a12 12 0 0 0 12 12h32a12 12 0 0 0 12-12v-92h44a12 12 0 0 0 12-12V88a12 12 0 0 0-12-12m4 44a4 4 0 0 1-4 4h-48a4 4 0 0 0-4 4v96a4 4 0 0 1-4 4h-32a4 4 0 0 1-4-4v-96a4 4 0 0 0-4-4H56a4 4 0 0 1-4-4V88a4 4 0 0 1 4-4h48a4 4 0 0 0 4-4V32a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4v48a4 4 0 0 0 4 4h48a4 4 0 0 1 4 4Z");
}
</style><path class="yzvn5pdok"/>`,
		"fallback": "ph:cross-thin",
	});
}

export default Component;
