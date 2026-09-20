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
		"content": `<style>.x5-_vzbqz {
  fill: currentColor;
  d: path("M9 20v-1h2v-2H3V4h18v13h-8v2h2v1zm-5-4h16V5H4zm0 0V5z");
}
</style><path class="x5-_vzbqz"/>`,
		"fallback": "material-symbols-light:desktop-windows-outline-sharp",
	});
}

export default Component;
