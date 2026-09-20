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
		"content": `<style>.shg1dvb_g {
  fill: currentColor;
  d: path("M8 17h8v-6h-4v2h2v2h-4V9h6V7H8zm-5 4V3h18v18zm2-2h14V5H5zM5 5v14z");
}
</style><path class="shg1dvb_g"/>`,
		"fallback": "material-symbols:g-mobiledata-badge-outline-sharp",
	});
}

export default Component;
