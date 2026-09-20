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
		"content": `<style>.d692x4ldc {
  fill: currentColor;
  d: path("M8.5 11.5H10v-6H7V7h1.5zm3.5 0h4.5v-6H12V9h3v1h-3zM13.5 8V6.5H15V8zM6 18.5h1.5V14h1v3H10v-3h1v4.5h1.5v-6H6zm7.5 0H15V17h3v-4.5h-4.5zm1.5-3V14h1.5v1.5zM3 21V3h18v18zm2-2h14V5H5zm0 0V5z");
}
</style><path class="d692x4ldc"/>`,
		"fallback": "material-symbols:19mp-outline-sharp",
	});
}

export default Component;
