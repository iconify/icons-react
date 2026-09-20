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
		"content": `<style>.ng6ilkb5d {
  fill: currentColor;
  d: path("M8.692 16.5h1v-4h4.616v4h1v-9h-1v4H9.692v-4h-1zM4 20V4h16v16zm1-1h14V5H5zM5 5v14z");
}
</style><path class="ng6ilkb5d"/>`,
		"fallback": "material-symbols-light:h-mobiledata-badge-outline-sharp",
	});
}

export default Component;
