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
		"content": `<style>.jii44-bis {
  fill: currentColor;
  d: path("M11 19v-6.346L4.95 5h14.1L13 12.654V19zm1-6.7L16.95 6h-9.9zm0 0");
}
</style><path class="jii44-bis"/>`,
		"fallback": "material-symbols-light:filter-alt-outline-sharp",
	});
}

export default Component;
