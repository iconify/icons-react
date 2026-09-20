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
		"content": `<style>.vhgxqrb8e {
  fill: currentColor;
  d: path("M4 20V4h16v16zM5 5v9.096L6.596 12.5h10.808L19 14.096V5zm0 14h14v-3.5l-2-2H7l-2 2zm0 0h14z");
}
</style><path class="vhgxqrb8e"/>`,
		"fallback": "material-symbols-light:bottom-drawer-outline-sharp",
	});
}

export default Component;
