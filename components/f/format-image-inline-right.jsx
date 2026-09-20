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
		"content": `<style>.yl4l7_bjt {
  fill: currentColor;
  d: path("M4 20v-1h16v1zm7.5-3.75v-8.5H20v8.5zM4 5V4h16v1zm0 11.25v-1h4.73v1z");
}
</style><path class="yl4l7_bjt"/>`,
		"fallback": "material-symbols-light:format-image-inline-right",
	});
}

export default Component;
