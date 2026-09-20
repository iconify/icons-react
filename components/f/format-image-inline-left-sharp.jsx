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
		"content": `<style>.nhy646bsi {
  fill: currentColor;
  d: path("M4 20v-1h16v1zm0-3.75v-8.5h8.5v8.5zM4 5V4h16v1zm11.27 11.25v-1H20v1z");
}
</style><path class="nhy646bsi"/>`,
		"fallback": "material-symbols-light:format-image-inline-left-sharp",
	});
}

export default Component;
