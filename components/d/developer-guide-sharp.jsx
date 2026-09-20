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
		"content": `<style>.ski1y769p {
  fill: currentColor;
  d: path("M3 21V3h18v18zm9-16v7l2.5-1.5L17 12V5z");
}
</style><path class="ski1y769p"/>`,
		"fallback": "material-symbols:developer-guide-sharp",
	});
}

export default Component;
