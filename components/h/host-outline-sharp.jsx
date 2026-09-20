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
		"content": `<style>.po98huw9o {
  fill: currentColor;
  d: path("M3 20V4h7.808v16zm10.192 0V4H21v16zM4 19h5.808V5H4zm10.192 0H20V5h-5.808zm-8.808-4.615h3v-1h-3zm10.232 0h3v-1h-3zM5.385 11.577h3v-1h-3zm10.23 0h3v-1h-3zM5.386 8.75h3v-1h-3zm10.23 0h3v-1h-3zM4 19h5.808zm10.192 0H20z");
}
</style><path class="po98huw9o"/>`,
		"fallback": "material-symbols-light:host-outline-sharp",
	});
}

export default Component;
