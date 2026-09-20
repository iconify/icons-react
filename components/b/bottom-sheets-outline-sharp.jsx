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
		"content": `<style>.wcry-ob_o {
  fill: currentColor;
  d: path("M3 21V3h18v18zm2-9h14V5H5zm0 2v5h14v-5zm0 0v5z");
}
</style><path class="wcry-ob_o"/>`,
		"fallback": "material-symbols:bottom-sheets-outline-sharp",
	});
}

export default Component;
