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
		"content": `<style>.m6swe7bil {
  fill: currentColor;
  d: path("M8.385 11.385h6v-5h-6zM19 21H5V3h14z");
}
</style><path class="m6swe7bil"/>`,
		"fallback": "material-symbols-light:float-portrait-2-sharp",
	});
}

export default Component;
