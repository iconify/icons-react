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
		"content": `<style>.yu2hdnbpd {
  fill: currentColor;
  d: path("M4 15v3c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4v-3zm16-2v-3c0-1.86-1.28-3.41-3-3.86V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2.14c-1.72.45-3 2-3 3.86v3zM9 4h6v2h-2c0-.55-.45-1-1-1s-1 .45-1 1H9z");
}
</style><path class="yu2hdnbpd"/>`,
		"fallback": "ic:baseline-propane-tank",
	});
}

export default Component;
