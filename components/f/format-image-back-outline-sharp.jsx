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
		"content": `<style>.g0r6yfb3g {
  fill: currentColor;
  d: path("M4 20v-1h16v1zm0-3.75v-1h3.75V12.5H4v-1h3.75V8.75H4v-1h16v1h-3.75v2.75H20v1h-3.75v2.75H20v1zm4.75-1h6.5V12.5h-6.5zm0-3.75h6.5V8.75h-6.5zM4 5V4h16v1zm8 6.5");
}
</style><path class="g0r6yfb3g"/>`,
		"fallback": "material-symbols-light:format-image-back-outline-sharp",
	});
}

export default Component;
