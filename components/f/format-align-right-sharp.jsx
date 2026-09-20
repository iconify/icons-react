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
		"content": `<style>.g_970ccbu {
  fill: currentColor;
  d: path("M4 5V4h16v1zm6 3.75v-1h10v1zM4 12.5v-1h16v1zm6 3.75v-1h10v1zM4 20v-1h16v1z");
}
</style><path class="g_970ccbu"/>`,
		"fallback": "material-symbols-light:format-align-right-sharp",
	});
}

export default Component;
