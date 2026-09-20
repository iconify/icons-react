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
		"content": `<style>.e_7kbwyeh {
  fill: currentColor;
  d: path("M3 7V5h18v2zm0 12v-2h18v2zm0-6v-2h18v2z");
}
</style><path class="e_7kbwyeh"/>`,
		"fallback": "material-symbols:dehaze-outline",
	});
}

export default Component;
