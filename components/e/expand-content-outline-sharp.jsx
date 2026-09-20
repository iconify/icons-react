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
		"content": `<style>.e7q4fxgdu {
  fill: currentColor;
  d: path("M6 18v-5h1v4h4v1zm11-7V7h-4V6h5v5z");
}
</style><path class="e7q4fxgdu"/>`,
		"fallback": "material-symbols-light:expand-content-outline-sharp",
	});
}

export default Component;
