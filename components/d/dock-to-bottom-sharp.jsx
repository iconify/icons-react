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
		"content": `<style>.e3h7vebmw {
  fill: currentColor;
  d: path("M5 14h14V5H5zm-2 7V3h18v18z");
}
</style><path class="e3h7vebmw"/>`,
		"fallback": "material-symbols:dock-to-bottom-sharp",
	});
}

export default Component;
