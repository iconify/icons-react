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
		"content": `<style>.ou67ikz8b {
  fill: currentColor;
  d: path("M3 21v-2h2v2zm0-4v-2h2v2zm0-4v-2h18v2zm0-4V7h2v2zm0-4V3h2v2zm4 16v-2h2v2zM7 5V3h2v2zm4 16v-2h2v2zm0-4v-2h2v2zm0-8V7h2v2zm0-4V3h2v2zm4 16v-2h2v2zm0-16V3h2v2zm4 16v-2h2v2zm0-4v-2h2v2zm0-8V7h2v2zm0-4V3h2v2z");
}
</style><path class="ou67ikz8b"/>`,
		"fallback": "material-symbols:border-horizontal",
	});
}

export default Component;
