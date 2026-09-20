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
		"content": `<style>.zqy4t3b0l {
  fill: currentColor;
  d: path("M3 16V8zm-1 1V7h14.116v1H3v8h13.116v1zm16.5-1.5v-3h-3v-1h3v-3h1v3h3v1h-3v3z");
}
</style><path class="zqy4t3b0l"/>`,
		"fallback": "material-symbols-light:battery-android-plus-outline-sharp",
	});
}

export default Component;
