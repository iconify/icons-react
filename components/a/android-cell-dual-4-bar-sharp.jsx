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
		"content": `<style>.fnb7crbqy {
  fill: currentColor;
  d: path("M1.5 14V9.5h3V14zm6 0V8h3v6zm6 0V6h3v8zm6 0V4h3v10zm-18 6v-4h3v4zm6 0v-4h3v4zm6 0v-4h3v4zm6 0v-4h3v4z");
}
</style><path class="fnb7crbqy"/>`,
		"fallback": "material-symbols:android-cell-dual-4-bar-sharp",
	});
}

export default Component;
