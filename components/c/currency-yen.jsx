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
		"content": `<style>.tplfl-b9e {
  fill: currentColor;
  d: path("M11 21v-4H6v-2h5v-2H6v-2h4.075L5 3h2.375L12 10.3L16.625 3H19l-5.075 8H18v2h-5v2h5v2h-5v4z");
}
</style><path class="tplfl-b9e"/>`,
		"fallback": "material-symbols:currency-yen",
	});
}

export default Component;
