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
		"content": `<style>.fu18tt28p {
  fill: currentColor;
  d: path("M16.5 14h1v-1.5H19v-1h-1.5V10h-1v1.5H15v1h1.5zM11 15h1.5v-2.25L14.25 15H16l-2.25-3L16 9h-1.75l-1.75 2.25V9H11zm-5 0h4v-1.5H7.5v-1H10V9H6v1.5h2.5v1H6zm-3 6V3h18v18z");
}
</style><path class="fu18tt28p"/>`,
		"fallback": "material-symbols:2k-plus-sharp",
	});
}

export default Component;
