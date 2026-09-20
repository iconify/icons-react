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
		"content": `<style>.r_qk72e4k {
  fill: currentColor;
  d: path("M10 11.5h4.5v-6H10V7h3v1h-2v1h2v1h-3zm-4 7h1.5V14h1v3H10v-3h1v4.5h1.5v-6H6zm7.5 0H15V17h3v-4.5h-4.5zm1.5-3V14h1.5v1.5zM3 21V3h18v18zm2-2h14V5H5zm0 0V5z");
}
</style><path class="r_qk72e4k"/>`,
		"fallback": "material-symbols:3mp-outline-sharp",
	});
}

export default Component;
