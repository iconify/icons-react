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
		"content": `<style>.jyimdtb_u {
  fill: currentColor;
  d: path("M13 15h1.5v-2.25L16.25 15H18l-2.25-3L18 9h-1.75l-1.75 2.25V9H13zm-6.5 0H11V9H6.5zM8 11.5V10h1.5v1.5zM8 14v-1.5h1.5V14zm-5 7V3h18v18z");
}
</style><path class="jyimdtb_u"/>`,
		"fallback": "material-symbols:8k-sharp",
	});
}

export default Component;
