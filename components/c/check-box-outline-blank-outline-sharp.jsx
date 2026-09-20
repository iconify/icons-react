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
		"content": `<style>.y6ebjggta {
  fill: currentColor;
  d: path("M3 21V3h18v18zm2-2h14V5H5z");
}
</style><path class="y6ebjggta"/>`,
		"fallback": "material-symbols:check-box-outline-blank-outline-sharp",
	});
}

export default Component;
