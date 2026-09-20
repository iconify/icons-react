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
		"content": `<style>.zw2h10h-w {
  fill: currentColor;
  d: path("M4 20V4h16v16zm7-9v2h2v-2zm-4 0v2h2v-2zm2 2v2h2v-2zm4 0v2h2v-2zm-8 0v2h2v-2zm10-2v2h2v2h2v-2h-2v-2zm-8 4v2H5v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h-2v-2h-2v2h-2v-2h-2v2H9v-2zm12-4v2zm0 4v2z");
}
</style><path class="zw2h10h-w"/>`,
		"fallback": "material-symbols-light:gradient-sharp",
	});
}

export default Component;
