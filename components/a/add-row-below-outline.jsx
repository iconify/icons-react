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
		"content": `<style>.vyeexh3ip {
  fill: currentColor;
  d: path("M5 10h14V4H5zM3 20V2h18v18h-4v-2h2v-6H5v6h2v2zm9-10v2zm-1 12v-2H9v-2h2v-2h2v2h2v2h-2v2z");
}
</style><path class="vyeexh3ip"/>`,
		"fallback": "material-symbols:add-row-below-outline",
	});
}

export default Component;
