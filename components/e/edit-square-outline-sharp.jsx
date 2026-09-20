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
		"content": `<style>.e8q12bo5p {
  fill: currentColor;
  d: path("M4 20V4h10.002l-1 1H5v14h14v-8.104l1-1V20zm6-6v-2.615l9.664-9.664l2.597 2.525L12.52 14zm10.814-9.715l-1.112-1.17zM11 13h1.092l6.666-6.666l-.546-.546l-.61-.584L11 11.806zm7.212-7.211l-.61-.585zl.546.546z");
}
</style><path class="e8q12bo5p"/>`,
		"fallback": "material-symbols-light:edit-square-outline-sharp",
	});
}

export default Component;
