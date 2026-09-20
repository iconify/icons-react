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
		"content": `<style>.thfj-xbcm {
  fill: currentColor;
  d: path("M8 17h8v-2h-6v-2h5v-2h-5V9h6V7H8zm-5 4V3h18v18zm2-2h14V5H5zM5 5v14z");
}
</style><path class="thfj-xbcm"/>`,
		"fallback": "material-symbols:e-mobiledata-badge-outline-sharp",
	});
}

export default Component;
