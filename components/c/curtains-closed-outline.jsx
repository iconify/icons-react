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
		"content": `<style>.x59723bpz {
  fill: currentColor;
  d: path("M2 21v-2h2V3h16v16h2v2zm4-2h3V5H6zm5 0h2V5h-2zm4 0h3V5h-3zm-9 0V5zm12 0V5z");
}
</style><path class="x59723bpz"/>`,
		"fallback": "material-symbols:curtains-closed-outline",
	});
}

export default Component;
