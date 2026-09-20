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
		"content": `<style>.hhrmpp-ca {
  fill: currentColor;
  d: path("M15 20H3V4h18v10h-2V6H5v12h10zm4 2v-2h-2v-2h2v-2h2v2h2v2h-2v2zM6 15h5v-2H9.5v.5h-2v-3h2v.5H11V9H6zm7 0h5v-2h-1.5v.5h-2v-3h2v.5H18V9h-5z");
}
</style><path class="hhrmpp-ca"/>`,
		"fallback": "material-symbols:closed-caption-add-outline-sharp",
	});
}

export default Component;
