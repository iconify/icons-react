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
		"content": `<style>.jj431tx8l {
  fill: currentColor;
  d: path("M1 18V6h19.5v12zm11-2h6.5V8H12zm9.5-1.5v-5H23v5z");
}
</style><path class="jj431tx8l"/>`,
		"fallback": "material-symbols:battery-android-4-sharp",
	});
}

export default Component;
