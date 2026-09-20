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
		"content": `<style>.fe74q_b7g {
  fill: currentColor;
  d: path("M1 18V6h19.5v12zm13-2h4.5V8H14zm7.5-1.5v-5H23v5z");
}
</style><path class="fe74q_b7g"/>`,
		"fallback": "material-symbols:battery-android-5-sharp",
	});
}

export default Component;
