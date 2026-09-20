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
		"content": `<style>.z7o_l_b5v {
  fill: currentColor;
  d: path("M10.616 15.635v-7.25L7.135 12zM13 20h1V4h-1z");
}
</style><path class="z7o_l_b5v"/>`,
		"fallback": "material-symbols-light:arrow-menu-close",
	});
}

export default Component;
