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
		"content": `<style>.rtzb19x8l {
  fill: currentColor;
  d: path("M8.5 15H10V9H7v1.5h1.5zm3 0H16V9h-4.5zm1.5-1v-1.5h1.5V14zm0-2.5V10h1.5v1.5zM3 21V3h18v18zm2-2h14V5H5zm0 0V5z");
}
</style><path class="rtzb19x8l"/>`,
		"fallback": "material-symbols:18-up-rating-outline-sharp",
	});
}

export default Component;
