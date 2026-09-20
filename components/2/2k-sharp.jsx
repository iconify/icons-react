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
		"content": `<style>.pi44lx8kb {
  fill: currentColor;
  d: path("M13 15h1.5v-2.25L16.25 15H18l-2.25-3L18 9h-1.75l-1.75 2.25V9H13zm-6.5 0H11v-1.5H8v-1h3V9H6.5v1.5h3v1h-3zM3 21V3h18v18z");
}
</style><path class="pi44lx8kb"/>`,
		"fallback": "material-symbols:2k-sharp",
	});
}

export default Component;
