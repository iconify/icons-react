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
		"content": `<style>.p2_mtybrf {
  fill: currentColor;
  d: path("M3 13h2v-2H3zm4 8h2v-2H7zm6-18h-2v2h2zm6 0v2h2c0-1.1-.9-2-2-2M5 21v-2H3c0 1.1.9 2 2 2m-2-4h2v-2H3zm8 4h2v-2h-2zm8-8h2v-2h-2zm0-4h2V7h-2zm-4-4h2V3h-2zM7.83 5L7 4.17V3h2v2zm12 12l-.83-.83V15h2v2zm1.36 4.19L2.81 2.81L1.39 4.22L4.17 7H3v2h2V7.83l2 2V17h7.17l2 2H15v2h2v-1.17l2.78 2.78zM9 15v-3.17L12.17 15zm6-2.83V9h-3.17l-2-2H17v7.17z");
}
</style><path class="p2_mtybrf"/>`,
		"fallback": "ic:baseline-deselect",
	});
}

export default Component;
