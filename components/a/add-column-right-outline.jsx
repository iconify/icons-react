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
		"content": `<style>.ug2grlb9b {
  fill: currentColor;
  d: path("M4 5v14h6.558V5zM3 20V4h16v3.116h-1V5h-6.442v14H18v-2.116h1V20zm7.558-8h1zM18 14.5v-2h-2v-1h2v-2h1v2h2v1h-2v2z");
}
</style><path class="ug2grlb9b"/>`,
		"fallback": "material-symbols-light:add-column-right-outline",
	});
}

export default Component;
