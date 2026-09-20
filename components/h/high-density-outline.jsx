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
		"content": `<style>.rvzdojzbn {
  fill: currentColor;
  d: path("M3 17V3h14v14zm2-2h10V5H5zm-2 6v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zm0-4v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2zm0-4V3h2v2zm-9 5");
}
</style><path class="rvzdojzbn"/>`,
		"fallback": "material-symbols:high-density-outline",
	});
}

export default Component;
