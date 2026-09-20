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
		"content": `<style>.pm15ef-2f {
  fill: currentColor;
  d: path("M4.48 16.116v-2.424H3v-3.384h1.48V7.885H21v8.23zm.981-1H13V8.885H5.462z");
}
</style><path class="pm15ef-2f"/>`,
		"fallback": "material-symbols-light:battery-horiz-050-outline-sharp",
	});
}

export default Component;
