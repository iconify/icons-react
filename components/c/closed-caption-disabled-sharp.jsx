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
		"content": `<style>.h1c4ho86l {
  fill: currentColor;
  d: path("M3 20V5.825L.675 3.5L2.1 2.075l19.8 19.8l-1.425 1.425l-3.3-3.3zm18-1.875L17.875 15H18v-2h-1.5v.5h-.125L14.5 11.625V10.5h2v.5H18V9h-5v1.125L6.875 4H21zM6 15h5v-1.175L10.175 13H9.5v.5h-2v-3.175L6.375 9.2H6z");
}
</style><path class="h1c4ho86l"/>`,
		"fallback": "material-symbols:closed-caption-disabled-sharp",
	});
}

export default Component;
