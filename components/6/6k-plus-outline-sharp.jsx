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
		"content": `<style>.o90t-3bcm {
  fill: currentColor;
  d: path("M6 15h4v-3.5H7.5v-1H10V9H6zm1.5-1v-1.5h1V14zm3.5 1h1.5v-2.25L14.25 15h1.825l-2.325-3l2.325-3H14.25l-1.75 2.25V9H11zm5.5-1h1v-1.5H19v-1h-1.5V10h-1v1.5H15v1h1.5zM3 21V3h18v18zm2-2h14V5H5zm0 0V5z");
}
</style><path class="o90t-3bcm"/>`,
		"fallback": "material-symbols:6k-plus-outline-sharp",
	});
}

export default Component;
