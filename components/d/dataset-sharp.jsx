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
		"content": `<style>.jzhcejhfi {
  fill: currentColor;
  d: path("M3 21V3h18v18zm4-10h4V7H7zm6 0h4V7h-4zm-6 6h4v-4H7zm6 0h4v-4h-4z");
}
</style><path class="jzhcejhfi"/>`,
		"fallback": "material-symbols:dataset-sharp",
	});
}

export default Component;
