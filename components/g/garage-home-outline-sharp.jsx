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
		"content": `<style>.j9dhaqekf {
  fill: currentColor;
  d: path("M5 20V9.5l7-5.288L19 9.5V20h-1V10l-6-4.538L6 10v10zm3.5-1.02h7v-3h-7zm0-4h7v-3h-7zm-1 5v-9h9v9z");
}
</style><path class="j9dhaqekf"/>`,
		"fallback": "material-symbols-light:garage-home-outline-sharp",
	});
}

export default Component;
