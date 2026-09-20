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
		"content": `<style>.ppwrgkbxe {
  fill: currentColor;
  d: path("M1 18V6h19.5v12zm5-2h12.5V8H6zm15.5-1.5v-5H23v5z");
}
</style><path class="ppwrgkbxe"/>`,
		"fallback": "material-symbols:battery-android-1-sharp",
	});
}

export default Component;
