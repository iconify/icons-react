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
		"content": `<style>.t6-07zc8p {
  fill: currentColor;
  d: path("M1 18V6h19.5v12zm15-2h2.5V8H16zm5.5-1.5v-5H23v5z");
}
</style><path class="t6-07zc8p"/>`,
		"fallback": "material-symbols:battery-android-6-sharp",
	});
}

export default Component;
