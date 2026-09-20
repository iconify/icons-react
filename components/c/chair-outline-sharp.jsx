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
		"content": `<style>.jp41r0bka {
  fill: currentColor;
  d: path("M4 21v-2H1V8h3V3h16v5h3v11h-3v2h-2v-2H6v2zm-1-4h18v-7h-2v5H5v-5H3zm4-4h10V8h1V5H6v3h1zm5 2");
}
</style><path class="jp41r0bka"/>`,
		"fallback": "material-symbols:chair-outline-sharp",
	});
}

export default Component;
