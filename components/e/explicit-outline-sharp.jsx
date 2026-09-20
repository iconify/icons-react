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
		"content": `<style>.f-3vihsgf {
  fill: currentColor;
  d: path("M9.5 16.5h5v-1h-4v-3h4v-1h-4v-3h4v-1h-5zM4 20V4h16v16zm1-1h14V5H5zm0 0V5z");
}
</style><path class="f-3vihsgf"/>`,
		"fallback": "material-symbols-light:explicit-outline-sharp",
	});
}

export default Component;
