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
		"content": `<style>.s6whtxbvo {
  fill: currentColor;
  d: path("M7 21v-3H5v-2h2v-2H5v-2h2V3h6.5q2.3 0 3.9 1.6T19 8.5t-1.6 3.9t-3.9 1.6H9v2h4v2H9v3zm2-9h4.5q1.45 0 2.475-1.025T17 8.5t-1.025-2.475T13.5 5H9z");
}
</style><path class="s6whtxbvo"/>`,
		"fallback": "material-symbols:currency-ruble-sharp",
	});
}

export default Component;
