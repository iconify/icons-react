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
		"content": `<style>.tzx8rfcxe {
  fill: currentColor;
  d: path("M4 20V4h1v16zm3.692 0v-1.23h1.231V20zm0-7.384v-1.231h1.231v1.23zm0-7.385V4h1.231v1.23zM11.385 20v-1.23h1.23V20zm0-3.692v-1.231h1.23v1.23zm0-3.693v-1.23h1.23v1.23zm0-3.692v-1.23h1.23v1.23zm0-3.692V4h1.23v1.23zM15.077 20v-1.23h1.23V20zm0-7.384v-1.231h1.23v1.23zm0-7.385V4h1.23v1.23zM18.769 20v-1.23H20V20zm0-3.692v-1.231H20v1.23zm0-3.693v-1.23H20v1.23zm0-3.692v-1.23H20v1.23zm0-3.692V4H20v1.23z");
}
</style><path class="tzx8rfcxe"/>`,
		"fallback": "material-symbols-light:border-left-outline",
	});
}

export default Component;
