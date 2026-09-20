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
		"content": `<style>.p7x6fjnug {
  fill: currentColor;
  d: path("M1 18V6h19.5v12zm9-2h8.5V8H10zm11.5-1.5v-5H23v5z");
}
</style><path class="p7x6fjnug"/>`,
		"fallback": "material-symbols:battery-android-3-sharp",
	});
}

export default Component;
