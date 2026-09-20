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
		"content": `<style>.rnkwsrmbb {
  fill: currentColor;
  d: path("M11 19v-6.346L4.95 5h14.1L13 12.654V19z");
}
</style><path class="rnkwsrmbb"/>`,
		"fallback": "material-symbols-light:filter-alt-sharp",
	});
}

export default Component;
