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
		"content": `<style>.d9iz1xbai {
  fill: currentColor;
  d: path("M3.658 10.616L4.038 5h15.924l.38 5.616zM5.692 19l-.267-.846H3.173l.418-6.52H20.41l.417 6.52h-2.252l-.267.846z");
}
</style><path class="d9iz1xbai"/>`,
		"fallback": "material-symbols-light:google-wifi-sharp",
	});
}

export default Component;
