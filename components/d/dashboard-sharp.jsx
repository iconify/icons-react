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
		"content": `<style>.s5yqfpbwo {
  fill: currentColor;
  d: path("M13 9V3h8v6zM3 13V3h8v10zm10 8V11h8v10zM3 21v-6h8v6z");
}
</style><path class="s5yqfpbwo"/>`,
		"fallback": "material-symbols:dashboard-sharp",
	});
}

export default Component;
