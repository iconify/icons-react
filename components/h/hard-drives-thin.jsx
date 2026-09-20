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
		"content": `<style>.qc1oelb0a {
  fill: currentColor;
  d: path("M208 140H48a12 12 0 0 0-12 12v48a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12v-48a12 12 0 0 0-12-12m4 60a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-4-156H48a12 12 0 0 0-12 12v48a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 60a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-24 72a8 8 0 1 1-8-8a8 8 0 0 1 8 8m0-96a8 8 0 1 1-8-8a8 8 0 0 1 8 8");
}
</style><path class="qc1oelb0a"/>`,
		"fallback": "ph:hard-drives-thin",
	});
}

export default Component;
