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
		"content": `<style>.ob0l5fnqi {
  fill: currentColor;
  d: path("M4 20v-1.23h1.23V20zm0-3.692v-1.231h1.23v1.23zM4 12.5v-1h16v1zm0-3.577v-1.23h1.23v1.23zm0-3.692V4h1.23v1.23zM7.692 20v-1.23h1.231V20zm0-14.77V4h1.231v1.23zM11.385 20v-1.23h1.23V20zm0-3.692v-1.231h1.23v1.23zm0-7.385v-1.23h1.23v1.23zm0-3.692V4h1.23v1.23zM15.077 20v-1.23h1.23V20zm0-14.77V4h1.23v1.23zM18.769 20v-1.23H20V20zm0-3.692v-1.231H20v1.23zm0-7.385v-1.23H20v1.23zm0-3.692V4H20v1.23z");
}
</style><path class="ob0l5fnqi"/>`,
		"fallback": "material-symbols-light:border-horizontal-outline",
	});
}

export default Component;
