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
		"content": `<style>.c_xbp1blt {
  fill: currentColor;
  d: path("M20 7h-5V6h5zM6 19.5V5.616q0-.691.463-1.153T7.616 4H13v1H7.616q-.231 0-.424.192T7 5.616V17.95l5-2.15l5 2.15V11h1v8.5l-6-2.577zM7 5h6z");
}
</style><path class="c_xbp1blt"/>`,
		"fallback": "material-symbols-light:bookmark-remove-outline",
	});
}

export default Component;
