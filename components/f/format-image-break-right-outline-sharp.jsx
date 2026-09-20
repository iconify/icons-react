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
		"content": `<style>.ix3-3gksw {
  fill: currentColor;
  d: path("M4 5V4h16v1zm7.5 11.25v-8.5H20v8.5zm1-1H19v-6.5h-6.5zM4 20v-1h16v1zm11.75-8");
}
</style><path class="ix3-3gksw"/>`,
		"fallback": "material-symbols-light:format-image-break-right-outline-sharp",
	});
}

export default Component;
