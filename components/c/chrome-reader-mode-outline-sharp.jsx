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
		"content": `<style>.mb5-b37eb {
  fill: currentColor;
  d: path("M3 19V5h18v14zm1-1h7.5V6H4zm8.5 0H20V6h-7.5zm1.077-8.308h5.346v-.884h-5.346zm0 2.5h5.346v-.884h-5.346zm0 2.5h5.346v-.884h-5.346zM4 6v12z");
}
</style><path class="mb5-b37eb"/>`,
		"fallback": "material-symbols-light:chrome-reader-mode-outline-sharp",
	});
}

export default Component;
