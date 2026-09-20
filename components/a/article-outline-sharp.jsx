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
		"content": `<style>.e_uxjzw_u {
  fill: currentColor;
  d: path("M7 17h7v-2H7zm0-4h10v-2H7zm0-4h10V7H7zM3 21V3h18v18zm2-2h14V5H5zm0 0V5z");
}
</style><path class="e_uxjzw_u"/>`,
		"fallback": "material-symbols:article-outline-sharp",
	});
}

export default Component;
