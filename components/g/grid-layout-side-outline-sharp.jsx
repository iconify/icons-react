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
		"content": `<style>.ttqjf1b4r {
  fill: currentColor;
  d: path("M3 21V3h18v18zm2-2h8V5H5zm14 0V5h-4v14z");
}
</style><path class="ttqjf1b4r"/>`,
		"fallback": "material-symbols:grid-layout-side-outline-sharp",
	});
}

export default Component;
