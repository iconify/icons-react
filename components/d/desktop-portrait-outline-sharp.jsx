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
		"content": `<style>.pa99j9beh {
  fill: currentColor;
  d: path("M11 18h5V9h-5zm-3-3h1.5V7.5H13V6H8zm12 7H4V2h16zm-2-2V4H6v16zm0-16H6z");
}
</style><path class="pa99j9beh"/>`,
		"fallback": "material-symbols:desktop-portrait-outline-sharp",
	});
}

export default Component;
