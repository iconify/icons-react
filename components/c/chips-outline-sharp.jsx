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
		"content": `<style>.bdmhjibzm {
  fill: currentColor;
  d: path("M7 13h10v-2H7zm-4 8V3h18v18zm2-2h14V5H5zm0 0V5z");
}
</style><path class="bdmhjibzm"/>`,
		"fallback": "material-symbols:chips-outline-sharp",
	});
}

export default Component;
