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
		"content": `<style>.r0hgc4bkr {
  fill: currentColor;
  d: path("M3 21V3h18v18zm2-6h14V5H5zm0 2v2h14v-2zm0 0v2z");
}
</style><path class="r0hgc4bkr"/>`,
		"fallback": "material-symbols:bottom-navigation-outline-sharp",
	});
}

export default Component;
