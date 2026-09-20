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
		"content": `<style>.frqc-969k {
  fill: currentColor;
  d: path("M4 20v-1.23h1.23V20zm0-3.692v-1.231h1.23v1.23zm0-3.693v-1.23h1.23v1.23zm0-3.692v-1.23h1.23v1.23zm0-3.692V4h1.23v1.23zM7.692 20v-1.23h1.231V20zm0-7.384v-1.231h1.231v1.23zm0-7.385V4h1.231v1.23zM11.385 20v-1.23h1.23V20zm0-3.692v-1.231h1.23v1.23zm0-3.693v-1.23h1.23v1.23zm0-3.692v-1.23h1.23v1.23zm0-3.692V4h1.23v1.23zM15.077 20v-1.23h1.23V20zm0-7.384v-1.231h1.23v1.23zm0-7.385V4h1.23v1.23zM19 20V4h1v16z");
}
</style><path class="frqc-969k"/>`,
		"fallback": "material-symbols-light:border-right-sharp",
	});
}

export default Component;
