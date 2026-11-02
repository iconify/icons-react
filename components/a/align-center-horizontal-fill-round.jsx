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
		"content": `<style>.syxkevg3z {
  fill: currentColor;
  d: path("M13 3v18a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0M9 3v8H7a4 4 0 0 1 0-8Zm6 0h2a4 4 0 0 1 0 8h-2ZM9 13v8a4 4 0 0 1 0-8m6 8v-8a4 4 0 0 1 0 8");
}
</style><path class="syxkevg3z"/>`,
		"fallback": "coolicons:align-center-horizontal-fill-round",
	});
}

export default Component;
