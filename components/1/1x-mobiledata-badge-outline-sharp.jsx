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
		"content": `<style>.uphydec3g {
  fill: currentColor;
  d: path("M7.5 16.5h1v-9h-3v1h2zm4.462 0h1.077l2.211-3.752l2.212 3.752h1.115l-2.77-4.73l2.5-4.27h-1.076l-1.962 3.348L13.308 7.5h-1.116l2.52 4.308zM2 20V4h20v16zm1-1h18V5H3zm0 0V5z");
}
</style><path class="uphydec3g"/>`,
		"fallback": "material-symbols-light:1x-mobiledata-badge-outline-sharp",
	});
}

export default Component;
