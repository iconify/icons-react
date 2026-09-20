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
		"content": `<style>.kg3hqdb5t {
  fill: currentColor;
  d: path("M1 21V3h22v18zm2-2h18V5H3zm16-8h-3v2h1v2h-3V9h5V7h-7v10h7zM5 17h6v-6H7V9h4V7H5v6h4v2H5zm-2 2V5z");
}
</style><path class="kg3hqdb5t"/>`,
		"fallback": "material-symbols:5g-mobiledata-badge-outline-sharp",
	});
}

export default Component;
