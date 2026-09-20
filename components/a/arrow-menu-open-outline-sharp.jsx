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
		"content": `<style>.dmww7ihsb {
  fill: currentColor;
  d: path("M10 20V4h1v16zm3.385-4.365v-7.25L16.865 12z");
}
</style><path class="dmww7ihsb"/>`,
		"fallback": "material-symbols-light:arrow-menu-open-outline-sharp",
	});
}

export default Component;
