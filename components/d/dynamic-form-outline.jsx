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
		"content": `<style>.gt4rpkbpx {
  fill: currentColor;
  d: path("M4 11q-.825 0-1.412-.587T2 9V6q0-.825.588-1.412T4 4h9v7zm0-2h7V6H4zm0 11q-.825 0-1.412-.587T2 18v-3q0-.825.588-1.412T4 13h11v7zm0-2h9v-3H4zm13 2v-9h-2V4h7l-2 5h2zM4.75 17.25h1.5v-1.5h-1.5zm0-9h1.5v-1.5h-1.5zM4 9V6zm0 9v-3z");
}
</style><path class="gt4rpkbpx"/>`,
		"fallback": "material-symbols:dynamic-form-outline",
	});
}

export default Component;
