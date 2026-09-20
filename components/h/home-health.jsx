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
		"content": `<style>.ha9d07bcx {
  fill: currentColor;
  d: path("M10.5 17h3v-2.5H16v-3h-2.5V9h-3v2.5H8v3h2.5zM4 21V9l8-6l8 6v12z");
}
</style><path class="ha9d07bcx"/>`,
		"fallback": "material-symbols:home-health",
	});
}

export default Component;
