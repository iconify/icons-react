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
		"content": `<style>.cikm25usp {
  fill: currentColor;
  d: path("M4 21V9l8-6l8 6v12zm4-4h6v-2l2 1.05v-4.1L14 13v-2H8z");
}
</style><path class="cikm25usp"/>`,
		"fallback": "material-symbols:camera-indoor-sharp",
	});
}

export default Component;
