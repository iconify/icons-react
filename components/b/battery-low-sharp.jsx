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
		"content": `<style>.rr0veybtv {
  fill: currentColor;
  d: path("M4.48 16.116v-2.424H3v-3.384h1.48V7.885H21v8.23zm.981-1H17V8.885H5.462z");
}
</style><path class="rr0veybtv"/>`,
		"fallback": "material-symbols-light:battery-low-sharp",
	});
}

export default Component;
