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
		"content": `<style>.aufb6-82k {
  fill: currentColor;
  d: path("M3 21V3h18v18zM5 5v14h14V5h-2v7l-2.5-1.5L12 12V5zm0 14V5z");
}
</style><path class="aufb6-82k"/>`,
		"fallback": "material-symbols:developer-guide-outline-sharp",
	});
}

export default Component;
