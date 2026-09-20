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
		"content": `<style>.e8fz6_14x {
  fill: currentColor;
  d: path("M8 21v-2h2v-2H2V3h20v14h-8v2h2v2zm-4-6h16V5H4zm0 0V5z");
}
</style><path class="e8fz6_14x"/>`,
		"fallback": "material-symbols:desktop-windows-outline-sharp",
	});
}

export default Component;
