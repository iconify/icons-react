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
		"content": `<style>.i9ym_tqos {
  fill: currentColor;
  d: path("M4 5V4h16v1zm7.5 11.25v-8.5H20v8.5zM4 20v-1h16v1z");
}
</style><path class="i9ym_tqos"/>`,
		"fallback": "material-symbols-light:format-image-break-right-sharp",
	});
}

export default Component;
