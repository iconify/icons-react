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
		"content": `<style>.yc55fxgkb {
  fill: currentColor;
  d: path("M11.225 17H18v-2h-4.775zM6 17h3.075l7.575-7.55l-3.075-3.075L6 13.925zm7.575-6.6l-.95-.95l.95-.95l.925.925zM3 21V3h18v18z");
}
</style><path class="yc55fxgkb"/>`,
		"fallback": "material-symbols:drive-file-rename-sharp",
	});
}

export default Component;
