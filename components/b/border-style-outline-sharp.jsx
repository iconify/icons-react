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
		"content": `<style>.hwzsut_jw {
  fill: currentColor;
  d: path("M7.692 20v-1.23h1.231V20zm3.693 0v-1.23h1.23V20zm3.692 0v-1.23h1.23V20zm3.692 0v-1.23H20V20zm0-3.692v-1.231H20v1.23zm0-3.693v-1.23H20v1.23zm0-3.692v-1.23H20v1.23zM4 20V4h16v1H5v15z");
}
</style><path class="hwzsut_jw"/>`,
		"fallback": "material-symbols-light:border-style-outline-sharp",
	});
}

export default Component;
