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
		"content": `<style>.sprwmjbgk {
  fill: currentColor;
  d: path("m12 11.596l3.173-3.192H8.827zM5 19h14v-3H5zm0-4h14V5H5zm0 1v3zm-1 4V4h16v16z");
}
</style><path class="sprwmjbgk"/>`,
		"fallback": "material-symbols-light:bottom-panel-close-outline-sharp",
	});
}

export default Component;
