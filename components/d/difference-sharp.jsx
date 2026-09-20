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
		"content": `<style>.jxui3dbsr {
  fill: currentColor;
  d: path("M13 10.5h1v-2h2v-1h-2v-2h-1v2h-2v1h2zm-2 4h5v-1h-5zM7 18V2h8.5L20 6.5V18zm-4 4V8h1v13h10v1z");
}
</style><path class="jxui3dbsr"/>`,
		"fallback": "material-symbols-light:difference-sharp",
	});
}

export default Component;
