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
		"content": `<style>.u1qbojz_h {
  fill: currentColor;
  d: path("m12.659 2.247l5.714 5A1.001 1.001 0 0 1 17.714 9H9v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10c0-.288.124-.563.341-.753l8-7c.378-.329.94-.329 1.318 0M21 22h-8a1 1 0 0 1-.992-1.124l1-8A1 1 0 0 1 14 12h6a1 1 0 0 1 .992.876l1 8A.997.997 0 0 1 21 22m-6.117-8l-.25 2H16v-2ZM18 16h1.367l-.25-2H18Zm-3.617 2l-.25 2H16v-2Zm5.234 0H18v2h1.867Z");
}
</style><path class="u1qbojz_h"/>`,
		"fallback": "coolicons:house-solar-panel-corner-fill-sharp",
	});
}

export default Component;
