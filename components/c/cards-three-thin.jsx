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
		"content": `<style>.h08fewbar {
  fill: currentColor;
  d: path("M208 92H48a12 12 0 0 0-12 12v96a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12v-96a12 12 0 0 0-12-12m4 108a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-96a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4ZM52 64a4 4 0 0 1 4-4h144a4 4 0 0 1 0 8H56a4 4 0 0 1-4-4m16-32a4 4 0 0 1 4-4h112a4 4 0 0 1 0 8H72a4 4 0 0 1-4-4");
}
</style><path class="h08fewbar"/>`,
		"fallback": "ph:cards-three-thin",
	});
}

export default Component;
