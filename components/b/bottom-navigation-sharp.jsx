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
		"content": `<style>.eptikw0xo {
  fill: currentColor;
  d: path("M3 21V3h18v18zm2-6h14V5H5z");
}
</style><path class="eptikw0xo"/>`,
		"fallback": "material-symbols:bottom-navigation-sharp",
	});
}

export default Component;
