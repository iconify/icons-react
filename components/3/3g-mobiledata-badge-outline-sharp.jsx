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
		"content": `<style>.w10rfeb_i {
  fill: currentColor;
  d: path("M1 21V3h22v18zm2-2h18V5H3zm0 0V5zm9-2h7v-6h-3v2h1v2h-3V9h5V7h-7zm-7 0h6v-4l-1-1l1-1V7H5v2h4v2H5v2h4v2H5z");
}
</style><path class="w10rfeb_i"/>`,
		"fallback": "material-symbols:3g-mobiledata-badge-outline-sharp",
	});
}

export default Component;
