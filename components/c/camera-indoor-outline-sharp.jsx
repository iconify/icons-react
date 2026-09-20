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
		"content": `<style>.g2m44yb1y {
  fill: currentColor;
  d: path("M8 17h6v-2l2 1.05v-4.1L14 13v-2H8zm-4 4V9l8-6l8 6v12zm2-2h12v-9l-6-4.5L6 10zm6-6.75");
}
</style><path class="g2m44yb1y"/>`,
		"fallback": "material-symbols:camera-indoor-outline-sharp",
	});
}

export default Component;
