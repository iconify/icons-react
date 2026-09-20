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
		"content": `<style>.boea9c97w {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-4.615h14V5H5zm0 1V19h14v-2.616zm0 0V19z");
}
</style><path class="boea9c97w"/>`,
		"fallback": "material-symbols-light:bottom-navigation-outline-sharp",
	});
}

export default Component;
