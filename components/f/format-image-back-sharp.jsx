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
		"content": `<style>.qy-9aj24e {
  fill: currentColor;
  d: path("M4 20v-1h16v1zm0-3.75v-1h3.75V12.5H4v-1h3.75V8.75H4v-1h16v1h-3.75v2.75H20v1h-3.75v2.75H20v1zM4 5V4h16v1z");
}
</style><path class="qy-9aj24e"/>`,
		"fallback": "material-symbols-light:format-image-back-sharp",
	});
}

export default Component;
