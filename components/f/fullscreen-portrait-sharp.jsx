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
		"content": `<style>.dd8-vz0rt {
  fill: currentColor;
  d: path("M8.385 17.616h7.23V6.385h-7.23zM19 21H5V3h14z");
}
</style><path class="dd8-vz0rt"/>`,
		"fallback": "material-symbols-light:fullscreen-portrait-sharp",
	});
}

export default Component;
