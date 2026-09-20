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
		"content": `<style>.h47d66b0y {
  fill: currentColor;
  d: path("M216 90h-50V40a14 14 0 0 0-14-14h-48a14 14 0 0 0-14 14v50H40a14 14 0 0 0-14 14v48a14 14 0 0 0 14 14h50v50a14 14 0 0 0 14 14h48a14 14 0 0 0 14-14v-50h50a14 14 0 0 0 14-14v-48a14 14 0 0 0-14-14m2 62a2 2 0 0 1-2 2h-56a6 6 0 0 0-6 6v56a2 2 0 0 1-2 2h-48a2 2 0 0 1-2-2v-56a6 6 0 0 0-6-6H40a2 2 0 0 1-2-2v-48a2 2 0 0 1 2-2h56a6 6 0 0 0 6-6V40a2 2 0 0 1 2-2h48a2 2 0 0 1 2 2v56a6 6 0 0 0 6 6h56a2 2 0 0 1 2 2Z");
}
</style><path class="h47d66b0y"/>`,
		"fallback": "ph:first-aid-light",
	});
}

export default Component;
