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
		"content": `<style>.jlwby3b8d {
  fill: currentColor;
  d: path("M1 18V6h19.5v12zm7-2h10.5V8H8zm13.5-1.5v-5H23v5z");
}
</style><path class="jlwby3b8d"/>`,
		"fallback": "material-symbols:battery-android-2-outline-sharp",
	});
}

export default Component;
