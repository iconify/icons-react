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
		"content": `<style>.bu0p-pbmo {
  fill: currentColor;
  d: path("M7 21v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zm0-4v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2zM3 21V3h18v2H5v16z");
}
</style><path class="bu0p-pbmo"/>`,
		"fallback": "material-symbols:border-style",
	});
}

export default Component;
