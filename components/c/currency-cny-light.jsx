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
		"content": `<style>.smoebgvbb {
  fill: currentColor;
  d: path("M58 56a6 6 0 0 1 6-6h128a6 6 0 0 1 0 12H64a6 6 0 0 1-6-6m158 106a6 6 0 0 0-6 6v18h-34a18 18 0 0 1-18-18v-50h50a6 6 0 0 0 0-12H48a6 6 0 0 0 0 12h50v10a58.07 58.07 0 0 1-58 58a6 6 0 0 0 0 12a70.08 70.08 0 0 0 70-70v-10h36v50a30 30 0 0 0 30 30h40a6 6 0 0 0 6-6v-24a6 6 0 0 0-6-6");
}
</style><path class="smoebgvbb"/>`,
		"fallback": "ph:currency-cny-light",
	});
}

export default Component;
