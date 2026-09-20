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
		"content": `<style>.tsp_7obwa {
  fill: currentColor;
  d: path("M6 18h5.5v-4H6zm0-5h5.5V6H6zm6.5 5H18v-7h-5.5zm0-8H18V6h-5.5zM3 21V3h18v4h2v2h-2v2h2v2h-2v2h2v2h-2v4zm2-2h14V5H5zM5 5v14z");
}
</style><path class="tsp_7obwa"/>`,
		"fallback": "material-symbols:empty-dashboard-outline-sharp",
	});
}

export default Component;
