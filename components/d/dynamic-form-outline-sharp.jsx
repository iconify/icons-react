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
		"content": `<style>.o4_pkwbjs {
  fill: currentColor;
  d: path("M2 11V4h11v7zm2-2h7V6H4zM2 20v-7h13v7zm2-2h9v-3H4zm13 2v-9h-2V4h7l-2 5h2zM4.75 17.25h1.5v-1.5h-1.5zm0-9h1.5v-1.5h-1.5zM4 9V6zm0 9v-3z");
}
</style><path class="o4_pkwbjs"/>`,
		"fallback": "material-symbols:dynamic-form-outline-sharp",
	});
}

export default Component;
