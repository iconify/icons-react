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
		"content": `<style>.xti1jbcvd {
  fill: currentColor;
  d: path("M6 19h3v-6h6v6h3v-9l-6-4.5L6 10zm-2 2V9l8-6l8 6v12h-7v-6h-2v6zm8-8.75");
}
</style><path class="xti1jbcvd"/>`,
		"fallback": "material-symbols:home-outline-sharp",
	});
}

export default Component;
