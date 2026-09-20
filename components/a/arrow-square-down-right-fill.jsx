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
		"content": `<style>.kjs2ooebc {
  fill: currentColor;
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-40 128a8 8 0 0 1-8 8h-48a8 8 0 0 1 0-16h28.69l-50.35-50.34a8 8 0 0 1 11.32-11.32L152 140.69V112a8 8 0 0 1 16 0Z");
}
</style><path class="kjs2ooebc"/>`,
		"fallback": "ph:arrow-square-down-right-fill",
	});
}

export default Component;
