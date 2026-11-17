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
		"content": `<style>.ttvxyhbli {
  fill: currentColor;
  d: path("M12 7.099V6H9a3 3 0 0 0-3 3v7a1 1 0 0 1-2 0V9a5 5 0 0 1 5-5h3.838l5.846-1.949a1.001 1.001 0 0 1 .632 1.898L14 5.721v1.378A5.01 5.01 0 0 1 18 12v2H8v-2a5.01 5.01 0 0 1 4-4.901M8 21v-5h10v5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1");
}
</style><path class="ttvxyhbli"/>`,
		"fallback": "coolicons:fire-extinguisher-fill-sharp",
	});
}

export default Component;
