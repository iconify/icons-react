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
		"content": `<style>.so5_hyb5q {
  fill: currentColor;
  d: path("M4 20v-1.23h1.23V20zm0-3.692v-1.231h1.23v1.23zm0-7.385v-1.23h1.23v1.23zm0-3.692V4h1.23v1.23zM7.692 20v-1.23h1.231V20zm0-14.77V4h1.231v1.23zM15.077 20v-1.23h1.23V20zm3.692 0v-1.23H20V20zm0-3.692v-1.231H20v1.23zm0-7.385v-1.23H20v1.23zm0-3.692V4H20v1.23zm-3.692 0V4h1.23v1.23zM11.5 20v-7.5H4v-1h7.5V4h1v7.5H20v1h-7.5V20z");
}
</style><path class="so5_hyb5q"/>`,
		"fallback": "material-symbols-light:border-inner-outline-sharp",
	});
}

export default Component;
