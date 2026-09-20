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
		"content": `<style>.rwi06wbjp {
  fill: currentColor;
  d: path("M21 18.15L5.85 3H21zm-1.2 4.45L18.2 21H3V5.8L1.4 4.2l1.4-1.4l18.4 18.4zM6 17h8.175l-2.1-2.1l-.825 1.1L9 13z");
}
</style><path class="rwi06wbjp"/>`,
		"fallback": "material-symbols:hide-image-sharp",
	});
}

export default Component;
