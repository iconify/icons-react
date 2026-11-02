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
		"content": `<style>.txnr8nb1s {
  fill: currentColor;
  d: path("M3 11a3 3 0 0 1 3-3h4a.997.997 0 0 0 1-1V6c0-.898.572-1.928 1.521-2.089a1.34 1.34 0 0 1 1.186.382l6 6a2.414 2.414 0 0 1 0 3.414l-6 6a1.36 1.36 0 0 1-1.186.382C11.572 19.928 11 18.898 11 18v-1a.997.997 0 0 0-1-1H6a3 3 0 0 1-3-3Z");
}
</style><path class="txnr8nb1s"/>`,
		"fallback": "coolicons:arrow-big-right-fill-round",
	});
}

export default Component;
