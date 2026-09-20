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
		"content": `<style>.bsi6igw_i {
  fill: currentColor;
  d: path("m20.475 23.3l-5.3-5.3H2V4.825L.675 3.5L2.1 2.075l19.8 19.8zM22 19.125L16.875 14H18v-2h-3.125l-1-1H18V9h-6.125l-1-1H18V6H8.875l-4-4H22zM6 14h5.175l-2-2H6zm0-3h2.175l-2-2H6z");
}
</style><path class="bsi6igw_i"/>`,
		"fallback": "material-symbols:comments-disabled-sharp",
	});
}

export default Component;
