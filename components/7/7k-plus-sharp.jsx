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
		"content": `<style>.s1abezbmv {
  fill: currentColor;
  d: path("M7 15h1.75l1.45-4.7V9H5.75v1.5H8.4zm4 0h1.5v-2.25L14.25 15H16l-2.25-3L16 9h-1.75l-1.75 2.25V9H11zm5.5-1h1v-1.5H19v-1h-1.5V10h-1v1.5H15v1h1.5zM3 21V3h18v18z");
}
</style><path class="s1abezbmv"/>`,
		"fallback": "material-symbols:7k-plus-sharp",
	});
}

export default Component;
