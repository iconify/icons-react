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
		"content": `<style>.ffblv3a4h {
  fill: currentColor;
  d: path("M3 21V3h18v18zM5 5v8.25L6.25 12h11.5L19 13.25V5zm0 14h14v-3l-2-2H7l-2 2zm0 0h14z");
}
</style><path class="ffblv3a4h"/>`,
		"fallback": "material-symbols:bottom-drawer-outline-sharp",
	});
}

export default Component;
