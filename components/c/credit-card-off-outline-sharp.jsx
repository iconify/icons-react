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
		"content": `<style>.q55x4797l {
  fill: currentColor;
  d: path("m22 19.15l-2-2V12h-5.15l-4-4H20V6H8.85l-2-2H22zM9.15 12H4v6h11.15zm11.3 11.3l-3.3-3.3H2V4h2l2 2H4v2h1.15L.65 3.5l1.425-1.425l19.8 19.8z");
}
</style><path class="q55x4797l"/>`,
		"fallback": "material-symbols:credit-card-off-outline-sharp",
	});
}

export default Component;
