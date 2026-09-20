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
		"content": `<style>.x5_675bso {
  fill: currentColor;
  d: path("M4 16.25v-8.5h8.5v8.5zM4 5V4h16v1zm10.885 3.75v-1H20v1zm0 3.75v-1H20v1zm0 3.75v-1H20v1zM4 20v-1h16v1z");
}
</style><path class="x5_675bso"/>`,
		"fallback": "material-symbols-light:format-image-left-sharp",
	});
}

export default Component;
