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
		"content": `<style>.hx0gb20rn {
  fill: currentColor;
  d: path("M15.077 5.23V4h1.23v1.23zm0 14.77v-1.23h1.23V20zm3.692-14.77V4H20v1.23zm0 14.77v-1.23H20V20zm0-3.692v-1.231H20v1.23zm0-3.693v-1.23H20v1.23zm0-3.692v-1.23H20v1.23zM8.923 20H4V4h4.923v1H5v14h3.923zm2.577 3V1.385h1V23z");
}
</style><path class="hx0gb20rn"/>`,
		"fallback": "material-symbols-light:flip-sharp",
	});
}

export default Component;
