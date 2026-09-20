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
		"content": `<style>.ho-4fmber {
  fill: currentColor;
  d: path("M3 19V5h18v14zm9.5-1H20V6h-7.5zm1.077-8.308h5.346v-.884h-5.346zm0 2.5h5.346v-.884h-5.346zm0 2.5h5.346v-.884h-5.346z");
}
</style><path class="ho-4fmber"/>`,
		"fallback": "material-symbols-light:chrome-reader-mode-sharp",
	});
}

export default Component;
