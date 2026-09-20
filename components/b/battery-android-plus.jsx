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
		"content": `<style>.f0-li3u5i {
  fill: currentColor;
  d: path("M4.385 17q-.994 0-1.69-.695T2 14.615v-5.23q0-.994.696-1.69T4.385 7h11.73v2.116h-3v5.769h3V17zM18.5 15.5v-3h-3v-1h3v-3h1v3h3v1h-3v3z");
}
</style><path class="f0-li3u5i"/>`,
		"fallback": "material-symbols-light:battery-android-plus",
	});
}

export default Component;
