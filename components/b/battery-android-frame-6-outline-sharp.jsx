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
		"content": `<style>.ct836044v {
  fill: currentColor;
  d: path("M4 15V9h12v6zm-3 3V6h19.5v12zm2-2h15.5V8H3zm18.5-1.5v-5H23v5z");
}
</style><path class="ct836044v"/>`,
		"fallback": "material-symbols:battery-android-frame-6-outline-sharp",
	});
}

export default Component;
