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
		"content": `<style>.pjg5l9bvy {
  fill: currentColor;
  d: path("M6.5 11.5H11V10H8V9h3V5.5H6.5V7h3v1h-3zm9.5 0h1.5V10h1V8.5h-1v-3H16v3h-1.5v-3H13V10h3zm-10 7h1.5V14h1v3H10v-3h1v4.5h1.5v-6H6zm7.5 0H15V17h3v-4.5h-4.5zm1.5-3V14h1.5v1.5zM3 21V3h18v18z");
}
</style><path class="pjg5l9bvy"/>`,
		"fallback": "material-symbols:24mp-sharp",
	});
}

export default Component;
