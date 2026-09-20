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
		"content": `<style>.trp-8m0cm {
  fill: currentColor;
  d: path("M16 21v-9.95h6V21zm1-2h4v-5.95h-4zm-9 2v-2h2v-2H2V3h18v6.05h-2V5H4v10h10v2h-2v2h2v2zm.7-7.25L11 12l2.3 1.75l-.85-2.85l2.3-1.85H11.9l-.9-2.8l-.9 2.8H7.25l2.3 1.85zM11 10");
}
</style><path class="trp-8m0cm"/>`,
		"fallback": "material-symbols:important-devices-outline-sharp",
	});
}

export default Component;
