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
		"content": `<style>.qkto8vb6o {
  fill: currentColor;
  d: path("M11.5 16.25v-8.5H20v8.5zm1-1H19v-6.5h-6.5zM4 20v-1h16v1zm0-3.75v-1h5.116v1zm0-3.75v-1h5.116v1zm0-3.75v-1h5.116v1zM4 5V4h16v1zm11.75 7");
}
</style><path class="qkto8vb6o"/>`,
		"fallback": "material-symbols-light:format-image-right-outline-sharp",
	});
}

export default Component;
