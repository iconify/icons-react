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
		"content": `<style>.e3ruh7bhm {
  fill: currentColor;
  d: path("M20 15v-2h-2v-2h2V9h2v2h2v2h-2v2zM5 17v-3H1V7h2v5h2V7h2v5h1v2H7v3zm4 0V7h8v2h-6v6h4v-2h-2v-2h4v6z");
}
</style><path class="e3ruh7bhm"/>`,
		"fallback": "material-symbols:4g-plus-mobiledata-outline-sharp",
	});
}

export default Component;
