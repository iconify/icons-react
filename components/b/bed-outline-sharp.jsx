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
		"content": `<style>.vr1m4fbxx {
  fill: currentColor;
  d: path("M2 19v-9h1V5h18v5h1v9h-2v-2H4v2zm11-9h6V7h-6zm-8 0h6V7H5zm-1 5h16v-3H4zm16 0H4z");
}
</style><path class="vr1m4fbxx"/>`,
		"fallback": "material-symbols:bed-outline-sharp",
	});
}

export default Component;
