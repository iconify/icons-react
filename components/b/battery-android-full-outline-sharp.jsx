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
		"content": `<style>.i4e6nwbag {
  fill: currentColor;
  d: path("M1 18V6h19.5v12zm20.5-3.5v-5H23v5z");
}
</style><path class="i4e6nwbag"/>`,
		"fallback": "material-symbols:battery-android-full-outline-sharp",
	});
}

export default Component;
