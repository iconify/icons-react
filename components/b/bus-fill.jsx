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
		"content": `<style>.fw659vtau {
  fill: currentColor;
  d: path("M248 80v24a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0M16 72a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0V80a8 8 0 0 0-8-8m200-8v144a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16v-8H88v8a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V64a32 32 0 0 1 32-32h112a32 32 0 0 1 32 32m-112 84a12 12 0 1 0-12 12a12 12 0 0 0 12-12m72 0a12 12 0 1 0-12 12a12 12 0 0 0 12-12m24-76H56v40h144Z");
}
</style><path class="fw659vtau"/>`,
		"fallback": "ph:bus-fill",
	});
}

export default Component;
