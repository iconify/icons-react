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
		"content": `<style>.z5173g_rb {
  fill: currentColor;
  d: path("M3 17V7h10v10zm2-2h6V9H5zM3 5V3h18v2zm12 4V7h6v2zm0 4v-2h6v2zm0 4v-2h6v2zM3 21v-2h18v2zm5-9");
}
</style><path class="z5173g_rb"/>`,
		"fallback": "material-symbols:format-image-left-outline-sharp",
	});
}

export default Component;
