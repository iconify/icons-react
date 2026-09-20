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
		"content": `<style>.aliirjdwu {
  fill: currentColor;
  d: path("M7.5 11.5H12V10H9V9h3V5.5H7.5V7h3v1h-3zm7 0H16v-6h-3V7h1.5zm-8.5 7h1.5V14h1v3H10v-3h1v4.5h1.5v-6H6zm7.5 0H15V17h3v-4.5h-4.5zm1.5-3V14h1.5v1.5zM3 21V3h18v18z");
}
</style><path class="aliirjdwu"/>`,
		"fallback": "material-symbols:21mp-sharp",
	});
}

export default Component;
