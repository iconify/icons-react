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
		"content": `<style>.b7uxfvbgo {
  fill: currentColor;
  d: path("M8.385 11.385h6v-5h-6zM19 21H5V3h14zm-1-1V4H6v16zm0-16H6z");
}
</style><path class="b7uxfvbgo"/>`,
		"fallback": "material-symbols-light:float-portrait-2-outline-sharp",
	});
}

export default Component;
