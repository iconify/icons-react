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
		"content": `<style>.tmvxeob3y {
  fill: currentColor;
  d: path("M10 18v-2h4v2zm-4-5v-2h12v2zM3 8V6h18v2z");
}
</style><path class="tmvxeob3y"/>`,
		"fallback": "material-symbols:filter-list-sharp",
	});
}

export default Component;
