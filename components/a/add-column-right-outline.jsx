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
		"content": `<style>.vavxt8b9t {
  fill: currentColor;
  d: path("M4 5v14h6V5zM2 21V3h18v4h-2V5h-6v14h6v-2h2v4zm8-9h2zm8 3v-2h-2v-2h2V9h2v2h2v2h-2v2z");
}
</style><path class="vavxt8b9t"/>`,
		"fallback": "material-symbols:add-column-right-outline",
	});
}

export default Component;
