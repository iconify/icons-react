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
		"content": `<style>.wtp6bltgh {
  fill: currentColor;
  d: path("M4 11.5h4.673V6H4zm5.673 0h4.654V6H9.673zm5.654 0H20V6h-4.673zM4 18h4.673v-5.5H4zm5.673 0h4.654v-5.5H9.673zm5.654 0H20v-5.5h-4.673zM3 19V5h18v14z");
}
</style><path class="wtp6bltgh"/>`,
		"fallback": "material-symbols-light:calendar-view-month-outline-sharp",
	});
}

export default Component;
