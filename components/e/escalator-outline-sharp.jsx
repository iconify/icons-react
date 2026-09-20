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
		"content": `<style>.cf1dm7a1n {
  fill: currentColor;
  d: path("M5.5 18h4.8l5-9h3.2V6h-4.8l-5 9H5.5zM3 21V3h18v18zm2-2h14V5H5zm0 0V5z");
}
</style><path class="cf1dm7a1n"/>`,
		"fallback": "material-symbols:escalator-outline-sharp",
	});
}

export default Component;
