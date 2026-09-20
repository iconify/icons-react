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
		"content": `<style>.u21a955zz {
  fill: currentColor;
  d: path("M11.5 16.25v-8.5H20v8.5zM4 20v-1h16v1zm0-3.75v-1h5.116v1zm0-3.75v-1h5.116v1zm0-3.75v-1h5.116v1zM4 5V4h16v1z");
}
</style><path class="u21a955zz"/>`,
		"fallback": "material-symbols-light:format-image-right-sharp",
	});
}

export default Component;
